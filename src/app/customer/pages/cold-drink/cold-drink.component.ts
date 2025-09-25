import { Component } from '@angular/core';
import {coldDrinks, Product} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cold-drink',
  templateUrl: './cold-drink.component.html',
  styleUrls: ['./cold-drink.component.css']
})
export class ColdDrinkComponent {
  coldDrinks = coldDrinks;
  coldDrink: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  addToCart(coldDrinks: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == coldDrinks.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(coldDrinks);
      this.toastr.success('Selected item has been added to the cart!', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
    } else {
      this.toastr.info('Selected item already exists in the cart!', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
    }

  }
}
