import {Component, OnInit, OnDestroy} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Subscription} from 'rxjs';

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
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  ordersList: Order[] = [];
  private ordersSub: Subscription | any = null;
  expandedOrders: { [orderId: string]: boolean } = {};

  orderStatuses = ['Pending', 'Accepted', 'Preparing', 'Out for delivery', 'Delivered'];

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit() {
    // Subscribe to all orders, ordered by createdAt descending
    this.ordersSub = this.firestore
      .collection<Order>('orders', ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges({idField: 'id'})
      .subscribe(orders => {
        this.ordersList = orders;
        orders.forEach(order => {
          console.log(`Order ID: ${order.id}, Status: "${order.status}"`); // <-- check this
        });
      });
  }

  // Change order status and update Firestore
  changeStatus(order: Order, newStatus: string) {
    if (this.orderStatuses.includes(newStatus)) {
      this.firestore.collection('orders').doc(order.id).update({status: newStatus})
        .then(() => {
          console.log(`Order ${order.id} status updated to ${newStatus}`);
          order.status = newStatus; // locally update to reflect change immediately
        })
        .catch(err => console.error('Error updating status:', err));
    }
  }

  // Helper to get next status in the flow
  getNextStatus(currentStatus: string): string | null {
    const normalizedStatus = currentStatus?.toLowerCase().trim();
    const currentIndex = this.orderStatuses.indexOf(normalizedStatus);
    if (currentIndex < 0 || currentIndex === this.orderStatuses.length - 1) {
      return null;
    }
    return this.orderStatuses[currentIndex + 1];
  }

  toggleShowMore(orderId: string) {
    this.expandedOrders[orderId] = !this.expandedOrders[orderId];
  }

  ngOnDestroy() {
    if (this.ordersSub) {
      this.ordersSub.unsubscribe();
    }
  }
}
