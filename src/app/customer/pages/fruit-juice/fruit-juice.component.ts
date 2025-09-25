import {Component} from '@angular/core';
import {AppService} from "../../../app.service";
import {Product, juices, shakes} from "../../../../assets/data/products";
import {ToastrService} from "ngx-toastr";


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


  addJuiceToCart(juices: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == juices.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(juices);
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

  addShakeToCart(shakes: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == shakes.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(shakes);
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
