import {Injectable} from '@angular/core';
import {
  Product, juices, shakes, burgers, pizza, hotBeverage,
  coldBeverage, cocktail, beers, alcohol, cigarettes, snacks, coldDrinks, partyEssentials, rentSpeaker
} from "../../assets/data/products";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Define your product categories
  private juices: Product[] = juices;
  private shakes: Product[] = shakes;
  private burgers: Product[] = burgers;
  private pizza: Product[] = pizza;
  private hotBeverage: Product[] = hotBeverage;
  private coldBeverage: Product[] = coldBeverage;
  private cocktail: Product[] = cocktail;
  private beers: Product[] = beers;
  private alcohol: Product[] = alcohol;
  private cigarettes: Product[] = cigarettes;
  private snacks: Product[] = snacks;
  private coldDrinks: Product[] = coldDrinks;
  private partyEssentials: Product[] = partyEssentials;
  private rentSpeaker: Product[] = rentSpeaker;

  constructor() {
  }

  // Get all products from all categories
  getAllProducts(): Product[] {
    return [
      ...this.juices,
      ...this.shakes,
      ...this.burgers,
      ...this.pizza,
      ...this.hotBeverage,
      ...this.coldBeverage,
      ...this.cocktail,
      ...this.beers,
      ...this.alcohol,
      ...this.cigarettes,
      ...this.snacks,
      ...this.coldDrinks,
      ...this.partyEssentials,
      ...this.rentSpeaker
    ];
  }
}
