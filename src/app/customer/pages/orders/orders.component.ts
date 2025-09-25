import {Component} from '@angular/core';
import {Product} from "../../../../assets/data/products";

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
export class OrdersComponent {

  ordersList;
  orderStatus: any;
  date = new Date();

  constructor() {
    this.ordersList = JSON.parse(localStorage.getItem('orders') || '');
    this.getOrderStatus();
  }

  getOrderStatus() {
    setTimeout(() => {
      this.orderStatus = 'Accepted';
    }, 3000)
    setTimeout(() => {
      this.orderStatus = 'Preparing';
    }, 6000)
    setTimeout(() => {
      this.orderStatus = 'Out for delivery';
    }, 9000)
    setTimeout(() => {
      this.orderStatus = 'Delivered';
    }, 12000)

  }

}
