import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../../../../assets/data/cart-items";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  ordersList: Order[] = [];
  orderStatusTimers: any[] = [];
  private userId: string = '';
  private ordersSub: Subscription | any = null;
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
          console.log('Grouped Orders:', orders);
          this.ordersList = orders;
          orders.forEach(order => this.startOrderStatusTimer(order));
        });
    });
  }

  toggleShowMore(orderId: string) {
    this.expandedOrders[orderId] = !this.expandedOrders[orderId];
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
