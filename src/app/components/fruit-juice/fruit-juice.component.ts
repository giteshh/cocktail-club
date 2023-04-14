import { Component } from '@angular/core';
import {Juices, Shakes, juices, shakes} from "../../../assets/data/fruitjuice";


@Component({
  selector: 'app-fruit-juice',
  templateUrl: './fruit-juice.component.html',
  styleUrls: ['./fruit-juice.component.css']
})
export class FruitJuiceComponent {
  juices = juices; // from burgers array
  juice: Juices[] = [];
  shakes = shakes; // from pizza array
  shake : Shakes[] = []; // from fries array


  addToCart(juices: any, shakes: any) {

  }
}
