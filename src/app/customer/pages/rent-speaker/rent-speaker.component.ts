import {Component} from '@angular/core';
import {Product, rentSpeaker} from "../../../../assets/data/products";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-rent-speaker',
  templateUrl: './rent-speaker.component.html',
  styleUrls: ['./rent-speaker.component.css']
})
export class RentSpeakerComponent {

  rentSpeakers = rentSpeaker;
  rentSpeaker: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  async addToCart(rentSpeaker: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === rentSpeaker.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(rentSpeaker);

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
