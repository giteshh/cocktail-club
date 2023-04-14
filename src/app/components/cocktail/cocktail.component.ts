import { Component } from '@angular/core';
import {cocktail, Cocktail} from "../../../assets/data/cocktail";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  cocktails = cocktail;
  cocktail: Cocktail[] = [];



  addToCart(cocktails: any) {

  }
}
