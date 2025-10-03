import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItem, Order} from "../../../../assets/data/cart-items";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Subscription} from "rxjs";

interface FlatOrderItem extends CartItem {
  orderId: string;
  date: any;
  status: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  ordersList: FlatOrderItem[] = [];
  orderStatusTimers: any[] = [];
  private userId: string = '';
  private ordersSub: Subscription | any = null;

  constructor(private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fireAuth.authState.subscribe(user => {
      if (!user) return;
      this.userId = user.uid;

      this.ordersSub = this.firestore
        .collection<Order>('orders', ref =>
          ref.where('userId', '==', this.userId).orderBy('createdAt', 'desc')
        )
        .valueChanges({ idField: 'id' })
        .subscribe((orders: Order[]) => {
          console.log(orders);
          this.ordersList = [];

          orders.forEach(order => {
            order.items.forEach(item => {
              this.ordersList.push({
                ...item,
                orderId: order.id,
                date: order.createdAt,
                status: order.status || 'pending'
              });
            });
            this.startOrderStatusTimer(order);
          });

          console.log('Flattened orders:', this.ordersList);
        });
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
