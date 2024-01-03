import { Component } from '@angular/core';
import {cocktail, Product} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  cocktails = cocktail;
  cocktail: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService) {
  }
  addToCart(cocktails: any) {
      this.existingProduct = false;
      if (this.appService.getCart()) {
        this.cart = this.appService.getCart();
        this.cart.forEach((cart: any) => {
          if (cart.id == cocktails.id) {
            this.existingProduct = true;
          }
        })
      }
      if (!this.existingProduct) {
        this.appService.addToCart(cocktails);
        alert('Your Cocktail has been added to the cart!');
      } else {
        alert('Selected Cocktail already exists in the cart!');
      }

  }

}
