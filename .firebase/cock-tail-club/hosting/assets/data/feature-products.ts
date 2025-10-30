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
    "image": `${environment.imageUrl}/products/burgers/doublepatty.jpg`,
  },
  {
    "name": "Veggie",
    "price": 39,
    "image": `${environment.imageUrl}/products/burgers/veggie.jpg`,
  },
  {
    "name": "Mexican",
    "price": 99,
    "image": `${environment.imageUrl}/products/burgers/mexican.jpg`,
  },
  {
    "name": "Pepperoni",
    "price": 319,
    "image": `${environment.imageUrl}/products/pizza/pepperoni.jpg`,
  },
  {
    "name": "Italian",
    "price": 549,
    "image": `${environment.imageUrl}/products/pizza/itallian.jpg`,
  },
  {
    "name": "Mai Tai",
    "image": `${environment.imageUrl}/products/cocktail/maitai.jpg`,
    "price": 139
  },
  {
    "name": "Budweiser Magnum",
    "image": `${environment.imageUrl}/products/beers/budweiser-magnum.jpg`,
    "price": 280
  },
  {
    "name": "Ballentine's",
    "image": `${environment.imageUrl}/products/alcohol/ballentines.jpg`,
    "price": 5650
  },
  {
    "name": "Champagne",
    "image": `${environment.imageUrl}/products/alcohol/champagne.jpg`,
    "price": 1200
  },
  {
    "name": "Kiwi",
    "image": `${environment.imageUrl}/products/shakes/kiwishake.jpg`,
    "price": 89
  },
  {
    "name": "Black bun",
    "image": `${environment.imageUrl}/products/burgers/blackbun.jpg`,
    "price": 199
  },
  {
    "name": "Cheesilious",
    "image": `${environment.imageUrl}/products/pizza/cheesilisious.jpg`,
    "price": 699
  },
  {
    "name": "Cappuccino",
    "image": `${environment.imageUrl}/products/hot-beverages/cappuccino.jpg`,
    "price": 49
  },
  {
    "name": "Cold Coffee",
    "image": `${environment.imageUrl}/products/cold-beverages/cold-coffee.jpg`,
    "price": 149
  },
  {
    "name": "Unicorn",
    "price": 249,
    "image": `${environment.imageUrl}/products/cold-beverages/unicorn.jpg`,
  },
  {
    "name": "Gin Buzz",
    "price": 349,
    "image": `${environment.imageUrl}/products/cocktail/ginbuzz.jpg`,
  },
]
