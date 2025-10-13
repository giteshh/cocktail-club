import {environment} from "../../environments/environment";

export interface FeatureProducts {
  name: string,
  image: string,
  price: number
}

export const featureProducts: FeatureProducts[] = [
  {
    "name": "Double patty",
    "price": 169,
    "image": `${environment.imageUrl}/products/burgers/doublepatty.png`,
  },
  {
    "name": "Veggie",
    "price": 39,
    "image": `${environment.imageUrl}/products/burgers/veggie.png`,
  },
  {
    "name": "Mexican",
    "price": 99,
    "image": `${environment.imageUrl}/products/burgers/mexican.png`,
  },
  {
    "name": "Pepperoni",
    "price": 319,
    "image": `${environment.imageUrl}/products/pizza/pepperoni.png`,
  },
  {
    "name": "Italian",
    "price": 549,
    "image": `${environment.imageUrl}/products/pizza/italian.png`,
  },
  {
    "name": "Mai Tai",
    "image": `${environment.imageUrl}/products/cocktail/maitai.png`,
    "price": 139
  },
  {
    "name": "Budweiser Magnum",
    "image": `${environment.imageUrl}/products/beers/budweiser-magnum.png`,
    "price": 280
  },
  {
    "name": "Ballentine's",
    "image": `${environment.imageUrl}/products/alcohol/ballentines.png`,
    "price": 5650
  },
  {
    "name": "Champagne",
    "image": `${environment.imageUrl}/products/alcohol/champagne.png`,
    "price": 1200
  },
  {
    "name": "Kiwi",
    "image": `${environment.imageUrl}/products/juice/kiwi.png`,
    "price": 89
  },
  {
    "name": "Black bun",
    "image": `${environment.imageUrl}/products/burgers/blackbun.png`,
    "price": 199
  },
  {
    "name": "Cheesilious",
    "image": `${environment.imageUrl}/products/pizza/cheesilisious.png`,
    "price": 699
  },
  {
    "name": "Cappuccino",
    "image": `${environment.imageUrl}/products/hot-beverages/cappuccino.png`,
    "price": 49
  },
  {
    "name": "Cold Coffee",
    "image": `${environment.imageUrl}/products/cold-beverages/coldcoffee.png`,
    "price": 149
  },
  {
    "name": "Unicorn",
    "price": 249,
    "image": `${environment.imageUrl}/products/cold-beverages/unicorn.png`,
  },
  {
    "name": "Gin Buzz",
    "price": 349,
    "image": `${environment.imageUrl}/products/cocktail/ginbuzz.png`,
  },
]
