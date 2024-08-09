import {Component} from '@angular/core';
import {Product} from "../../../../assets/data/products";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  ordersList: Product[] = [];
  date = new Date();
  status = 'Pending';

  constructor() {
    this.ordersList = JSON.parse(<string>localStorage.getItem('orders')) || [];
    console.log(this.ordersList);
    this.deliveryStatus();
  }


  deliveryStatus() {
    setTimeout(() => {
      this.status = 'Order accepted';
      this.date = new Date();
    }, 2000)
    setTimeout(() => {
      this.status = 'Preparing Order';
      this.date = new Date();
    }, 4000)
    setTimeout(() => {
      this.status = 'On the way';
      this.date = new Date();
    }, 6000)
    setTimeout(() => {
      this.status = 'Order Delivered';
      this.date = new Date();
    }, 8000)

  }
}
