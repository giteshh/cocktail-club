import { Component } from '@angular/core';
import {beers, Product} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent {

  beers = beers;
  beer: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  addToCart(beers: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == beers.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(beers);
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
