import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../../../assets/data/products";
import {CartItem, Order} from "../../../../assets/data/cart-items";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Subscription} from "rxjs";

interface orderItems {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number,
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {

  ordersList: Order[] = [];
  orderStatusTimers: any[] = [];
  private userId: string | null = null;
  ordersSub: Subscription | any = null;

  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {}

  async ngOnInit() {
    // Wait for user to be logged in
    const user = await this.fireAuth.authState.pipe().toPromise();
    if (!user) {
      console.log('No user logged in');
      return;
    }
    this.userId = user.uid;

    // Fetch orders for this user from Firestore
    this.ordersSub = this.firestore
      .collection<Order>('orders', ref =>
        ref.where('userId', '==', this.userId).orderBy('createdAt', 'desc')
      )
      .valueChanges({ idField: 'id' })
      .subscribe((orders: Order[]) => {
        console.log('Fetched orders:', orders);
        this.ordersList = orders;

        // Start updating status for each order
        this.ordersList.forEach(order => this.startOrderStatusTimer(order));
      });
  }

  startOrderStatusTimer(order: Order) {
    const statuses = ['Accepted', 'Preparing', 'Out for delivery', 'Delivered'];
    let index = 0;

    const interval = setInterval(() => {
      if (index < statuses.length) {
        order.status = statuses[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    this.orderStatusTimers.push(interval);
  }

  ngOnDestroy() {
    this.orderStatusTimers.forEach(timer => clearInterval(timer));
    if (this.ordersSub) this.ordersSub.unsubscribe();
  }

}
