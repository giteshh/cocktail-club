import {Component} from '@angular/core';
import {Product, burgers, pizza, fries} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-fast-food',
  templateUrl: './fast-food.component.html',
  styleUrls: ['./fast-food.component.css']
})
export class FastFoodComponent {
  burgers = burgers; // from burgers array
  pizza = pizza; // from pizza array
  fries = fries; // from fries array
  fastFood: Product[] = [];

  cart: Product[] = [];
  existingBurger = false;
  existingPizza = false;
  existingFries = false;

  constructor(private appService: AppService) {
  }

  addBurgerToCart(burgers: any) {
    this.existingBurger = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == burgers.id) {
          this.existingBurger = true;
        }
      })
    }
    if (!this.existingBurger) {
      this.appService.addToCart(burgers);
      alert('Your Burger has been added to the cart!');
    } else {
      alert('Selected Burger already exists in the cart!');
    }
  }

  addPizzaToCart(pizza: any) {
    this.existingPizza = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == pizza.id) {
          this.existingPizza = true;
        }
      })
    }
    if (!this.existingPizza) {
      this.appService.addToCart(pizza);
      alert('Your Pizza has been added to the cart!');
    } else {
      alert('Selected Pizza already exists in the cart!');
    }
  }

  addFriesToCart(fries: any) {
    this.existingFries = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == fries.id) {
          this.existingFries = true;
        }
      })
    }
    if (!this.existingFries) {
      this.appService.addToCart(fries);
      alert('Your Fries has been added to the cart!');
    } else {
      alert('Selected Fries already exists in the cart!');
    }
  }

}
