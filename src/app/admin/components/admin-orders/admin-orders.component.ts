import {Component, OnInit, OnDestroy} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {firstValueFrom, map, Subscription} from 'rxjs';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {UserProfile} from "../../../../assets/data/cart-items";
import {doc, getDoc} from "@angular/fire/firestore";

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
  user?: UserProfile | null;
}

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  ordersList: Order[] = [];
  private ordersSub: Subscription | any = null;
  expandedOrders: { [orderId: string]: boolean } = {};

  customerName: any;

  orderStatuses = [
    'Waiting for CC to accept your order',
    'Order Accepted',
    'Preparing your order',
    'Out for delivery',
    'Delivered at your Doorsteps'
  ];

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.ordersSub = this.firestore
      .collection<Order>('orders', ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges({idField: 'id'})
      .subscribe(async orders => {
        // Fetch user for each order
        this.ordersList = await Promise.all(
          orders.map(async order => {
            const user = await this.getUserById(order.userId);
            return {...order, user}; // attach user to order
          })
        );
      });
  }


  async getUserById(userId: string): Promise<UserProfile | null> {
    const docRef = this.firestore.collection<UserProfile>('users').doc(userId).ref;
    const docSnap = await docRef.get(); // native Firestore get()

    if (docSnap.exists) {
      const data = docSnap.data();
      if (data) {
        return {id: docSnap.id, ...data} as UserProfile;
      }
    }

    return null;
  }


  async getOrderDetails(order: Order): Promise<{ order: Order; user: UserProfile | null }> {
    const user = await this.getUserById(order.userId);
    return {order, user};
  }

  // Change order status and update Firestore
  changeStatus(order: Order, newStatus: string) {
    if (this.orderStatuses.includes(newStatus)) {
      this.firestore.collection('orders').doc(order.id).update({status: newStatus})
        .then(() => {
          order.status = newStatus;
        })
        .catch(err => console.error('Error updating status:', err));
    }
  }

  // Helper to get next status in the flow
  getNextStatus(currentStatus: string): string | null {
    const currentIndex = this.orderStatuses.indexOf(currentStatus);
    if (currentIndex < 0 || currentIndex === this.orderStatuses.length - 1) {
      return null;
    }
    return this.orderStatuses[currentIndex + 1];
  }

  toggleShowMore(orderId: string) {
    this.expandedOrders[orderId] = !this.expandedOrders[orderId];
  }

  async downloadInvoicePdf(order: Order) {
    const {user} = await this.getOrderDetails(order);

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

  async printOrderInvoice(order: Order) {
    const {user} = await this.getOrderDetails(order);

    let printContent = `
    <div style="font-family: Arial,sans-serif; padding:20px; width:600px; margin:auto;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <img src="/assets/images/navbar/cocktail.png" width="120" />
        <h2>Cocktail Club Co. Invoice</h2>
      </div>
      <hr/>
      <p><b>Invoice ID:</b> ${order.id}</p>
     <p><b>Order Date:</b> ${(order.createdAt instanceof Date
        ? order.createdAt
        : order.createdAt.toDate()
    ).toLocaleString()}</p>

      ${user ? `
        <p><b>Customer:</b> ${user.fullName}</p>
        <p><b>Email:</b> ${user.email}</p>
      ` : ''}
      <table border="1" cellspacing="0" cellpadding="6" width="100%" style="margin-top:15px; border-collapse:collapse;">
        <thead>
          <tr>
            <th align="left">Item</th>
            <th align="center">Qty</th>
            <th align="right">Price</th>
            <th align="right">Total</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(i => `
            <tr>
              <td>${i.name}</td>
              <td align="center">${i.quantity}</td>
              <td align="right">${i.price}</td>
              <td align="right">${i.price * i.quantity}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <h3 style="text-align:right; margin-top:10px;">Grand Total: ${order.total}</h3>
      <p style="text-align:center; margin-top:20px;">Thank you for choosing <b>Cocktail Club</b></p>
    </div>
  `;

    let printWindow = window.open('', '_blank', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
      <html>
        <head><title>Cocktail Club Invoice ${order.id} ${order.createdAt.toDate()}</title></head>
        <body>${printContent}<script>window.print();</script></body>
      </html>
    `);
      printWindow.document.close();
    }
  }

  ngOnDestroy() {
    if (this.ordersSub) {
      this.ordersSub.unsubscribe();
    }
  }
}
