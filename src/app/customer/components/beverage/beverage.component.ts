import {Component} from '@angular/core';
import {Product, coldBeverage, hotBeverage} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent {
  hotBeverages = hotBeverage;
  hotBeverage: Product[] = [];
  coldBeverages = coldBeverage;
  coldBeverage: Product[] = [];

  cart: Product[] = [];
  existingHotBeverages = false;
  existingColdBeverages = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  addHotBeverageToCart(hotBeverages: any) {
    this.existingHotBeverages = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == hotBeverages.id) {
          this.existingHotBeverages = true;
        }
      })
    }
    if (!this.existingHotBeverages) {
      this.appService.addToCart(hotBeverages);
      this.toastr.success('Selected item has been added to the cart!', '', {
        positionClass: 'toast-top-right',
        timeOut: 2000,
      });
    } else {
      this.toastr.info('Selected item already exists in the cart!', '', {
        positionClass: 'toast-top-right',
        timeOut: 2000,
      });
    }

  }

  addColdBeverageToCart(coldBeverages: any) {
    this.existingColdBeverages = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == coldBeverages.id) {
          this.existingColdBeverages = true;
        }
      })
    }
    if (!this.existingColdBeverages) {
      this.appService.addToCart(coldBeverages);
      this.toastr.success('Selected item has been added to the cart!', '', {
        positionClass: 'toast-top-right',
        timeOut: 2000,
      });
    } else {
      this.toastr.info('Selected item already exists in the cart!', '', {
        positionClass: 'toast-top-right',
        timeOut: 2000,
      });
    }

  }
}
