import {Component, OnInit} from '@angular/core';
import {ProductsInterface} from "../../../../assets/data/products-interface";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-hot-beverages',
  templateUrl: './hot-beverages.component.html',
  styleUrls: ['./hot-beverages.component.css']
})
export class HotBeveragesComponent implements OnInit {
  hotBeverages: ProductsInterface[] = [];
  coldBeverages: ProductsInterface[] = [];

  cart: ProductsInterface[] = [];
  existingHotBeverages = false;
  existingColdBeverages = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  async ngOnInit() {
    this.hotBeverages = await this.appService.getProductsByCategory('hotBeverages');
  }

  async addHotBeverageToCart(hotBeverages: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === hotBeverages.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(hotBeverages);

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

  async addColdBeverageToCart(coldBeverages: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === coldBeverages.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(coldBeverages);

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
