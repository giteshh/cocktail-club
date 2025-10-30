import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Subscription} from "rxjs";
import {environment} from "../../../../environments/environment";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  total: number;
  items: OrderItem[];
  status: string;
  createdAt: any;
}


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  totalOrders = 0;
  totalItemsSold = 0;
  totalSales = 0;
  cancelledOrders = 0;

  ordersSub: Subscription | any = null;

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.ordersSub = this.firestore
      .collection<Order>('orders')
      .valueChanges({idField: 'id'})
      .subscribe((orders: Order[]) => {
        this.totalOrders = orders.length;
        this.totalSales = 0;
        this.totalItemsSold = 0;
        this.cancelledOrders = 0;

        orders.forEach(order => {
          if (order.status === 'Cancelled by Customer' || order.status === 'Cancelled by Cocktail Club') {
            this.cancelledOrders++;
          } else {
            this.totalSales += order.total || 0;

            if (Array.isArray(order.items)) {
              order.items.forEach(item => {
                this.totalItemsSold += item.quantity || 0;
              });
            }
          }
        });
      });
  }

  ngOnDestroy() {
    this.ordersSub?.unsubscribe();
  }

  protected readonly environment = environment;
}
