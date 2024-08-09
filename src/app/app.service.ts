import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../assets/data/products";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getCart(): any {
    return JSON.parse(<string>localStorage.getItem('cart'));
  }

  addToCart(cart: any) {
    let arr = [];
    if (localStorage.getItem('cart')) {
      arr = JSON.parse(<string>localStorage.getItem('cart')) || [];
    }
    arr.push(cart);
    localStorage.setItem('cart', JSON.stringify(arr));
  }

  removeFromCart(index: number) {
    let arr = [];
    if (localStorage.getItem('cart')) {
      arr = JSON.parse(<string>localStorage.getItem('cart')) || [];
    }
    arr.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(arr));
  }

  addQtyToCart(index: number, quantity: number) {
    let arr = [];
    if (localStorage.getItem('cart')) {
      arr = JSON.parse(<string>localStorage.getItem('cart')) || [];
    }
    arr[index].quantity = quantity;
  }
}
