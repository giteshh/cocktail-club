import {Injectable} from '@angular/core';

import {
  alcohol,
  beers,
  burgers, cigarettes,
  cocktail,
  coldBeverage, coldDrinks,
  hotBeverage,
  juices, partyEssentials,
  pizza,
  Product,
  shakes, snacks
} from "../../assets/data/products";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductUploadService {

  constructor(private firestore: AngularFirestore) {
  }

  async uploadProducts() {
    const allProducts: Product[] = [
      ...juices.map(p => ({...p, category: 'juices'})),
      ...shakes.map(p => ({...p, category: 'shakes'})),
      ...burgers.map(p => ({...p, category: 'burgers'})),
      ...pizza.map(p => ({...p, category: 'pizza'})),
      ...hotBeverage.map(p => ({...p, category: 'hotBeverage'})),
      ...coldBeverage.map(p => ({...p, category: 'coldBeverage'})),
      ...cocktail.map(p => ({...p, category: 'cocktail'})),
      ...beers.map(p => ({...p, category: 'beers'})),
      ...alcohol.map(p => ({...p, category: 'alcohol'})),
      ...cigarettes.map(p => ({...p, category: 'cigarettes'})),
      ...snacks.map(p => ({...p, category: 'snacks'})),
      ...coldDrinks.map(p => ({...p, category: 'coldDrinks'})),
      ...partyEssentials.map(p => ({...p, category: 'partyEssentials'}))
    ];

    for (const product of allProducts) {
      try {
        await this.firestore
          .collection('products')
          .doc(product.id.toString())
          .set(product);

        console.log(`Uploaded: ${product.name}`);
      } catch (error) {
        console.error(`Failed to upload ${product.name}:`, error);
      }
    }

    console.log('All products uploaded to Firestore!');
  }
}
