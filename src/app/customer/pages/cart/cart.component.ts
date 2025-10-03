import {Component} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {Product} from "../../../../assets/data/products";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {CartItem} from "../../../../assets/data/cart-items";

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
  existingProduct = false;
  showButton = false;
  cart: CartItem[] = [];
  loggedIn;

  constructor(private appService: AppService,
              private router: Router,
              private authService: AuthService) {
    this.getCartItems();
    this.loggedIn = this.authService.userStatus();
  }

  // get all the items added to cart from localstorage
  async getCartItems() {
    this.cart = await this.appService.getCart();
    this.doTotal();
  }


  async addQty(item: CartItem, qty: number) {
    await this.appService.updateQuantity(item.id, qty);
    await this.getCartItems();
  }

  // remove selected item from cart and localstorage
  async removeCartItem(item: CartItem) {
    await this.appService.removeFromCart(item.id);
    await this.getCartItems();
  }


  doTotal() {
    // 1. Total product price
    this.productPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // 2. SGST and CGST (5% each of product price)
    this.sgst = this.productPrice * 0.05;
    this.cgst = this.productPrice * 0.05;

    // 3. Final total amount (product price + taxes + delivery)
    this.total = this.productPrice + this.sgst + this.cgst + this.deliveryCharge;

    // 4. Total quantity of items
    this.quantity = this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // placing order and removing items from localstorage
  async placeOrder() {
    // Ensure user is logged in via Firebase
    const isLoggedIn = await this.authService.isLoggedInAsync(); // see note below
    if (!isLoggedIn) {
      this.router.navigate(['/signin']);
      return;
    }

    // Load latest cart from Firestore before navigating
    await this.getCartItems(); // make this method async and Firestore-based

    // Navigate to checkout after cart is ready
    this.router.navigate(['/checkout']);
  }

}

