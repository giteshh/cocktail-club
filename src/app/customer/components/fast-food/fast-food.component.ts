import {Component} from '@angular/core';
import {Product, burgers, pizza, fries} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";

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

  constructor(private appService: AppService,
              private toastr: ToastrService) {
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
    // if (!this.existingBurger) {
      this.appService.addToCart(burgers);
      this.toastr.success('Selected item has been added to the cart!', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
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
