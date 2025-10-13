import {Component} from '@angular/core';
import {Product, snacks} from "../../../../assets/data/products";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {CartItem} from "../../../../assets/data/cart-items";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent {
  snacks = snacks;
  snack: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  async addToCart(snacks: CartItem) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === snacks.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(snacks);

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
