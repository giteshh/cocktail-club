import {Component} from '@angular/core';
import {burgers, Burger, pizza, fries} from "../../../assets/data/fastfood";

@Component({
  selector: 'app-fast-food',
  templateUrl: './fast-food.component.html',
  styleUrls: ['./fast-food.component.css']
})
export class FastFoodComponent {
  burgers = burgers; // from burgers array
  fastFood: Burger[] = [];
  pizza = pizza; // from pizza array
  fries = fries; // from fries array


  addToCart(burger: any, pizza: any) {

  }
}
