import {Component, OnInit} from '@angular/core';
import {ProductsInterface} from "../../../../assets/data/products-interface";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-party-essentials',
  templateUrl: './party-essentials.component.html',
  styleUrls: ['./party-essentials.component.css']
})
export class PartyEssentialsComponent implements OnInit {
  partyEssentials: ProductsInterface[] = [];
  cart: ProductsInterface[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  async ngOnInit() {
    this.partyEssentials = await this.appService.getProductsByCategory('partyEssentials');
  }

  async addToCart(partyEssentials: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === partyEssentials.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(partyEssentials);

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
