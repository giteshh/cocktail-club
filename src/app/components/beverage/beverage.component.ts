import {Component} from '@angular/core';
import {Product, coldBeverage, hotBeverage} from "../../../assets/data/products";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent {
  hotBeverages = hotBeverage;
  hotBeverage: Product[] = [];
  coldBeverages = coldBeverage;
  coldBeverage: Product[] = [];

  cart: Product[] = [];
  existingHotBeverages = false;
  existingColdBeverages = false;

  constructor(private appService: AppService) {
  }

  addHotBeverageToCart(hotBeverages: any) {
    this.existingHotBeverages = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == hotBeverages.id) {
          this.existingHotBeverages = true;
        }
      })
    }
    if (!this.existingHotBeverages) {
      this.appService.addToCart(hotBeverages);
      alert('Your Hot Beverage has been added to the cart!');
    } else {
      alert('Selected Hot Beverage already exists in the cart!');
    }

  }

  addColdBeverageToCart(coldBeverages: any) {
    this.existingColdBeverages = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == coldBeverages.id) {
          this.existingColdBeverages = true;
        }
      })
    }
    if (!this.existingColdBeverages) {
      this.appService.addToCart(coldBeverages);
      alert('Your Cold Beverage has been added to the cart!');
    } else {
      alert('Selected Cold Beverage already exists in the cart!');
    }

  }
}