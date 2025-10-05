import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Subscription} from "rxjs";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {UserProfile} from "../../../../assets/data/cart-items";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

interface Order {
  id: string;
  userId: string;
  status: string;
  createdAt: any;
  total: number;
  items: CartItem[];
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersList: Order[] = [];
  private userId: string = '';
  ordersSub: Subscription | any = null;
  expandedOrders: { [orderId: string]: boolean } = {};

  constructor(private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.fireAuth.authState.subscribe(user => {
      if (!user) return;
      this.userId = user.uid;

      this.ordersSub = this.firestore
        .collection<Order>('orders', ref =>
          ref.where('userId', '==', this.userId).orderBy('createdAt', 'desc')
        )
        .valueChanges({idField: 'id'})
        .subscribe((orders: Order[]) => {
          this.ordersList = orders;
        });
    });
  }

  toggleShowMore(orderId: string) {
    this.expandedOrders[orderId] = !this.expandedOrders[orderId];
  }

  getUserById(userId: string): Promise<UserProfile | null> {
    return this.firestore.collection<UserProfile>('users').doc(userId).get().toPromise()
      .then((doc: any) => doc.exists ? ({id: doc.id, ...doc.data() as UserProfile}) : null);
  }

  async getOrderDetails(order: Order): Promise<{ order: Order; user: UserProfile | null }> {
    const user = await this.getUserById(order.userId);
    return {order, user};
  }

  cancelOrder(order: Order) {
    const now = new Date();
    const orderTime = order.createdAt instanceof Date
      ? order.createdAt
      : order.createdAt.toDate();
    const timeDiffMins = (now.getTime() - orderTime.getTime()) / (1000 * 60);

    const cancellableStatuses = [
      'Waiting for CC to accept your order',
      'Order Accepted'
    ];

    if (timeDiffMins <= 5 || cancellableStatuses.includes(order.status)) {
      this.firestore.collection('orders').doc(order.id).update({
        status: 'Cancelled by Customer',
        cancelledAt: new Date(),
      }).then(() => {
        console.log(`Order ${order.id} cancelled.`);
      }).catch(err => console.error('Error cancelling order:', err));
    } else {
      alert('Order cannot be cancelled. It is already being prepared.');
    }
  }

  canCancel(order: Order): boolean {
    const now = new Date();
    const orderTime = order.createdAt instanceof Date
      ? order.createdAt
      : order.createdAt.toDate();

    const timeDiffMins = (now.getTime() - orderTime.getTime()) / (1000 * 60);
    const cancellableStatuses = [
      'Waiting for CC to accept your order',
      'Order Accepted'
    ];

    return timeDiffMins <= 5 && cancellableStatuses.includes(order.status);
  }

  isCancelled(order: Order): boolean {
    return order.status === 'Cancelled by Customer' || order.status === 'Cancelled by Cocktail Club';
  }

  async downloadInvoicePdf(order: Order) {
    const {user} = await this.getOrderDetails(order); // fetch user from Firestore

    const doc = new jsPDF();

    const img = new Image();
    img.src = '/assets/images/navbar/cocktail.png';

    // Add Logo (wait for it to load)
    await new Promise(resolve => {
      img.onload = () => {
        doc.addImage(img, 'PNG', 10, 10, 40, 20);
        resolve(true);
      };
    });

    // Header
    doc.setFontSize(18);
    doc.text('Cocktail Club Co. Invoice', 105, 20, {align: 'center'});

    doc.setFontSize(12);
    doc.text(`Invoice ID: ${order.id}`, 110, 40);
    doc.text(`Order Date:  ${(order.createdAt instanceof Date
        ? order.createdAt
        : order.createdAt.toDate()
    ).toLocaleString()}`, 110, 48);
    if (user) {
      doc.text(`Customer: ${user.fullName}`, 10, 40);
      doc.text(`Email: ${user.email}`, 10, 48);
    }

    // Items table
    autoTable(doc, {
      startY: 60,
      head: [['Item', 'Qty', 'Price', 'Total']],
      body: order.items.map(i => [
        i.name,
        i.quantity,
        `${i.price}`,
        `${i.price * i.quantity}`
      ]),
    });

    // Totals
    let finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.text(`Grand Total: ${order.total}`, 150, finalY, {align: 'right'});

    // Footer
    doc.setFontSize(10);
    doc.text('Thank you for choosing Cocktail Club', 105, finalY + 20, {align: 'center'});

    doc.save(`Cocktail Club Invoice-${order.id}-${order.createdAt.toDate()}.pdf`);
  }
}
