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
}
