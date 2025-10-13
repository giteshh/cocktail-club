import {Component} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {Product, juices, shakes} from "../../../../assets/data/products";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-fruit-juice',
  templateUrl: './fruit-juice.component.html',
  styleUrls: ['./fruit-juice.component.css']
})
export class FruitJuiceComponent {
  juices = juices;
  juice: Product | any;
  shakes = shakes;
  shake: Product | any;

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }


  async addJuiceToCart(juices: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === juices.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(juices);

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

  async addShakeToCart(shakes: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === shakes.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(shakes);

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
