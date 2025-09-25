import { Component } from '@angular/core';
import {alcohol, Product} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent {
  alcohols = alcohol;
  alcohol: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  addToCart(alcohols: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == alcohols.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(alcohols);
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
