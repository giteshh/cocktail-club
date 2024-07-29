import {Component} from '@angular/core';
import {AppService} from "../../../app.service";
import {Product} from "../../../../assets/data/products";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

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
  product: Product[] = [];
  total = 0;
  quantity = 0;
  totalPrice = 0; //sum of all products added

  min = 20;
  max = 50;
  sgst = 0;
  cgst = 0;
  deliveryCharge = Math.floor(Math.random() * (50 - 20) + 20);
  productPrice = 0;
  cartProducts: cartItems[] = [];
  existingProduct = false;
  showButton = false;
  cart: Product[] = [];
  loggedIn;

  constructor(private appService: AppService,
              private router: Router,
              private authService: AuthService) {
    this.getCartItems();
    this.loggedIn = this.authService.userStatus();
    console.log(this.loggedIn + 'hhhhhhhhhhhh');
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
      let finalPrice = (product.price * Number(product.quantity));
      this.total += finalPrice;
      this.quantity += Number(product.quantity);
    });
    this.productPrice = this.total;
    this.sgst = (this.total * 5) / 100;
    this.cgst = (this.total * 5) / 100;
    this.total += this.deliveryCharge + this.sgst + this.cgst;
    localStorage.setItem(
      'total',
      JSON.stringify(this.total)
    );
  }

  // placing order and removing items from localstorage
  placeOrder() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/signin']);
    } else {
      this.router.navigate(['/checkout']);
      this.getCartItems();
    }
  }
}

