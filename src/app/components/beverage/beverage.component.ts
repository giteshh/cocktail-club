import { Component } from '@angular/core';
import {HotBeverage, ColdBeverage, coldBeverage, hotBeverage} from "../../../assets/data/beverage";

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent {
  hotBeverages = hotBeverage;
  hotBeverage: HotBeverage[] = [];
  coldBeverages = coldBeverage;
  coldBeverage : ColdBeverage[] = [];


  addToCart(hotBeverages: any, coldBeverages: any) {

  }
}
