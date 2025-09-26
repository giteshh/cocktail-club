import {Component} from '@angular/core';
import {coldDrinks, Product} from "../../../../assets/data/products";
import {AppService} from "../../../services/app.service";
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

  async addToCart(coldDrinks: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === coldDrinks.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(coldDrinks);

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
}
