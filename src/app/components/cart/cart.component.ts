import {Component} from '@angular/core';
import {AppService} from "../../app.service";
import {Product} from "../../../assets/data/products";

interface cartItems {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  product: Product[] =[];
  total = 0;
  quantity = 1;
  totalPrice = 0;
  cartProducts: cartItems[] = [];
  existingProduct = false;
  showButton = false;
  cart: Product[] = [];

  constructor(private appService: AppService) {
    this.getCartItems();
  }

  // get all the items added to cart from localstorage
  getCartItems() {
    this.cart = this.appService.getCart();
    if (this.cart) {
      this.doTotal();
      this.showButton = this.cart.length > 0;
    } else {
      this.showButton = false;
    }
  }


  addQty(index: number, e: any) {
    this.appService.addQtyToCart(index, e.target.value);
    this.getCartItems();
  }

  // remove selected item from cart and localstorage
  removeCartItem(index: number) {
    this.appService.removeFromCart(index);
    this.getCartItems();
  }


  doTotal() {
    this.total = 0;
    this.cart.forEach((product: Product) => {
      let finalPrice = product.price * product.quantity;    //default quantity is 1
      this.total += finalPrice;
    });
  }

  // placing order and removing items from localstorage
  placeOrder() {
    localStorage.clear();
    this.getCartItems();
    alert("Your order is placed successfully ");
  }
}

