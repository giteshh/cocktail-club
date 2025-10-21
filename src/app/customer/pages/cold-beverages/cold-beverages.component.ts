import {Component, OnInit} from '@angular/core';
import {ProductsInterface} from "../../../../assets/data/products-interface";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-cold-beverages',
  templateUrl: './cold-beverages.component.html',
  styleUrls: ['./cold-beverages.component.css']
})
export class ColdBeveragesComponent implements OnInit {
  coldBeverages: ProductsInterface[] = [];
  cart: ProductsInterface[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  async ngOnInit() {
    this.coldBeverages = await this.appService.getProductsByCategory('coldBeverages');
  }

  async addColdBeverageToCart(juices: any) {
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

  protected readonly environment = environment;
}
