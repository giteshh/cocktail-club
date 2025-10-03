import {Component, OnInit} from '@angular/core';
import {Order} from "../../../../assets/data/cart-items";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Subscription} from "rxjs";

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
          console.log('Grouped Orders:', orders);
          this.ordersList = orders;
        });
    });
  }

  toggleShowMore(orderId: string) {
    this.expandedOrders[orderId] = !this.expandedOrders[orderId];
  }
}
