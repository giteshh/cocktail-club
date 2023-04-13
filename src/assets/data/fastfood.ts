interface Burger {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Fries {
  id: number;
  name: string;
  price: number;
  image: string;
}

const burgers = [
  {
    "id": 1,
    "name": "Double patty burger",
    "price": 69,
    "image": "https://img.freepik.com/free-photo/delicious-meat-sandwich-with-tomatoes-green-dark-surface-close-up-shot_179666-42483.jpg?w=996&t=st=1681404423~exp=1681405023~hmac=37f088b8e36830cc2edea148cc56889112f21a45be189e30c634880886ad6e09",
  },
  {
    "id": 2,
    "name": "Veggie Burger",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740&t=st=1681401662~exp=1681402262~hmac=e835df22eec5118e54dd33e0866697953d1f4079b782dda108289f7d5c9422e9",
  },
  {
    "id": 3,
    "name": "Burger + Fries combo",
    "price": 69,
    "image": "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=996&t=st=1681404444~exp=1681405044~hmac=6ab49b1461fba4132b280affc3cfe8f42f64ca71eeb4c7a0b376df23beac26c2",
  },
  {
    "id": 4,
    "name": "Double Burger combo",
    "price": 319,
    "image": "https://img.freepik.com/free-photo/front-view-chicken-burger-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food_140725-25937.jpg?w=996&t=st=1681404399~exp=1681404999~hmac=56a16adf2347bad587eb9d42d0e036e6363043c91f91bfe39e5356a16a29be47",
  },
  {
    "id": 5,
    "name": "Cheese aaloo tikki",
    "price": 319,
    "image": "https://img.freepik.com/free-photo/burger-with-meat-cutlet-tomatoes-lettuce-cheese_141793-1132.jpg?w=360&t=st=1681405955~exp=1681406555~hmac=9cf1acad6207d388c2f4be61e31e4819a98f03b04c42711eb855819e9c5ea1ab",
  }

]
const pizza = [
  {
    "id": 1,
    "name": "Cheesilious pizza",
    "price": 699,
    "image": "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?w=740&t=st=1681407925~exp=1681408525~hmac=f9563130426bf2153727cb9659a891243e4164993eb0fa9017f874838d2e2846",
  },
  {
    "id": 2,
    "name": "Fresh veggie pizza",
    "price": 399,
    "image": "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1681405880~exp=1681406480~hmac=282958a85d24a5a7a798f8105b4fd2f8359b945b69800835c2ea1fb6c5ddd3a3",
  },
  {
    "id": 3,
    "name": "Margherita pizza",
    "price": 299,
    "image": "https://img.freepik.com/free-photo/hawaiian-pizza-with-cooked-ham-pizza-sauce-cheese-pineapple_140725-10942.jpg?w=996&t=st=1681408264~exp=1681408864~hmac=414617723644629a9ac74d3bae1b5a8eb7cd2d51999937c0c9e157a8e446ba69",
  },
  {
    "id": 4,
    "name": "Cheese pepperoni ",
    "price": 319,
    "image": "https://img.freepik.com/free-photo/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls_114579-1963.jpg?w=900&t=st=1681408362~exp=1681408962~hmac=56d22176d09eb50c8fc4f3f598cdc37051fafdf53ec029d1196f26c2ed1af040",
  },
  {
    "id": 5,
    "name": "Any 2 combo",
    "price": 549,
    "image": "https://img.freepik.com/free-photo/two-kind-pizza-table_140725-5573.jpg?w=740&t=st=1681408398~exp=1681408998~hmac=b86366275089e8068bfb9541ae8ec96322eb2c11cda180390a8d75f87344a207",
  }

]

const fries = [
  {
    "id": 1,
    "name": "French Fries",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1681408625~exp=1681409225~hmac=146de81cd90a83953a0517c9f425613aac26d79fc32211aeb24a222e8b1cc26e",
  }
]


// console.log(JSON.parse(JSON.stringify(products)));
export {Burger, Pizza, Fries, burgers, pizza, fries}
