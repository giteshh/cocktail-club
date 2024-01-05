import {Component} from '@angular/core';
import {cocktail, Product} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  cocktails = cocktail;
  cocktail: Product[] = [];

  cart: Product[] = [];
  existingProduct = false;

  constructor(private appService: AppService,
              private toastr: ToastrService) {
  }

  addToCart(cocktails: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == cocktails.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(cocktails);
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
