import {Component} from '@angular/core';
import {AppService} from "../../../app.service";
import {Product, juices, shakes} from "../../../../assets/data/products";


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

  constructor(private appService: AppService) {
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
      alert('Your Juice has been added to the cart!');
    } else {
      alert('Selected Juice already exists in the cart!');
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
      alert('Your Shake has been added to the cart!');
    } else {
      alert('Selected Shake already exists in the cart!');
    }
  }

}
