import {Component} from '@angular/core';
import {Product, burgers, pizza, fries} from "../../../../assets/data/products";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../environments/environment";

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

  async addBurgerToCart(burgers: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === burgers.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(burgers);

        this.toastr.success('Selected item has been added to the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      } else {
        this.toastr.info('Selected item already exists in the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      this.toastr.error('Failed to add item to the cart.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });
    }
  }

  async addPizzaToCart(pizza: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === pizza.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(pizza);

        this.toastr.success('Selected item has been added to the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      } else {
        this.toastr.info('Selected item already exists in the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      this.toastr.error('Failed to add item to the cart.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });
    }
  }

  async addFriesToCart(fries: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === fries.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(fries);

        this.toastr.success('Selected item has been added to the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      } else {
        this.toastr.info('Selected item already exists in the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      this.toastr.error('Failed to add item to the cart.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });
    }
  }

  protected readonly environment = environment;
}
