interface Product {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number,
  description: string
}

const juices = [
  {
    "id": 1,
    "name": "Fresh Orange",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg?w=996&t=st=1681462817~exp=1681463417~hmac=1ba7893b17bde0764d84a84ea8de99f1b8fe6a259a519244b388d039d16265fb",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 2,
    "name": "Mixed Fruit",
    "price": 89,
    "image": "https://img.freepik.com/free-photo/summertime-smoothie-with-raspberry-blackberry-strawberry-ice_140725-3953.jpg?w=740&t=st=1681462942~exp=1681463542~hmac=c25fc1f4ac61835c2395228f205de16c8a65f342bce966538d089d8cbb3c7ed1",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 3,
    "name": "Lemon Water",
    "price": 29,
    "image": "https://img.freepik.com/free-photo/mojito-drink-with-lime-lemon-mint-wood-table_1150-12269.jpg?w=996&t=st=1681462965~exp=1681463565~hmac=6668feb4e0973f34a315f968d741b077c0e7181fa4244622e17b092c4863ab70",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 4,
    "name": "Pineapple",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/pineapple-juice-green-surface_1150-42297.jpg?w=996&t=st=1681464060~exp=1681464660~hmac=33d31575cc47ca95afe05bfbd59c50be80843c78aa7aabdf6483a65e2064f813",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 5,
    "name": "Watermelon",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/watermelon-smoothie_1339-457.jpg?w=360&t=st=1681463485~exp=1681464085~hmac=7ed6d164a3eb65dcbe8cf05fceaa1b0bded52fd1681f7b187e4266e2bf09aeb3",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

]
const shakes = [
  {
    "id": 6,
    "name": "Kiwi",
    "price": 89,
    "image": "https://img.freepik.com/free-photo/healthy-kiwi-smoothie-summer-recipe_53876-32273.jpg?w=900&t=st=1681462820~exp=1681463420~hmac=9b798392904ba104ce961acdb0988aef47e16b87a5f3a9d4df0e3de1c72d9de1",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 7,
    "name": "Mango",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/delicious-indian-mango-drink-high-angle_23-2148734680.jpg?w=740&t=st=1681462893~exp=1681463493~hmac=d852ac749f918e1a06262d502ba5d5f244adbfe6f718d89bb94922c81563f4d9",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 8,
    "name": "Strawberry",
    "price": 59,
    "image": "https://img.freepik.com/free-photo/jar-strawberry-refreshing-drink-with-various-sugar-sprinkles_181624-56040.jpg?w=740&t=st=1681462994~exp=1681463594~hmac=bbb4e18490209a5432345707b7347f4e0bf75e8e74fe5f75e76ba38bab4fb6d3",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 9,
    "name": "Banana",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/delicious-banana-milkshake_144627-5663.jpg?w=740&t=st=1681463028~exp=1681463628~hmac=e061ca18bd4599c4745fe07a5940d11f763a660ad9106e09cb2890dcc48b32be",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 10,
    "name": "Bananaberry",
    "price": 119,
    "image": "https://img.freepik.com/free-photo/fresh-strawberry-banana-smoothie-jar-wooden-table_123827-20782.jpg?w=996&t=st=1681464090~exp=1681464690~hmac=c9eac7540d6aaab4453a867e9e6039ebabb2ba780c65ae7cc42714a61907b47f",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

]

const burgers = [
  {
    "id": 11,
    "name": "Double patty burger",
    "price": 69,
    "image": "https://img.freepik.com/free-photo/delicious-meat-sandwich-with-tomatoes-green-dark-surface-close-up-shot_179666-42483.jpg?w=996&t=st=1681404423~exp=1681405023~hmac=37f088b8e36830cc2edea148cc56889112f21a45be189e30c634880886ad6e09",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 12,
    "name": "Veggie Burger",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740&t=st=1681401662~exp=1681402262~hmac=e835df22eec5118e54dd33e0866697953d1f4079b782dda108289f7d5c9422e9",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 13,
    "name": "Burger + Fries",
    "price": 69,
    "image": "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=996&t=st=1681404444~exp=1681405044~hmac=6ab49b1461fba4132b280affc3cfe8f42f64ca71eeb4c7a0b376df23beac26c2",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 14,
    "name": "Double Burger",
    "price": 319,
    "image": "https://img.freepik.com/free-photo/front-view-chicken-burger-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food_140725-25937.jpg?w=996&t=st=1681404399~exp=1681404999~hmac=56a16adf2347bad587eb9d42d0e036e6363043c91f91bfe39e5356a16a29be47",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 15,
    "name": "Cheese aaloo tikki",
    "price": 319,
    "image": "https://img.freepik.com/free-photo/burger-with-meat-cutlet-tomatoes-lettuce-cheese_141793-1132.jpg?w=360&t=st=1681405955~exp=1681406555~hmac=9cf1acad6207d388c2f4be61e31e4819a98f03b04c42711eb855819e9c5ea1ab",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

]
const pizza = [
  {
    "id": 16,
    "name": "Cheesilious pizza",
    "price": 699,
    "image": "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?w=740&t=st=1681407925~exp=1681408525~hmac=f9563130426bf2153727cb9659a891243e4164993eb0fa9017f874838d2e2846",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 17,
    "name": "Fresh veggie pizza",
    "price": 399,
    "image": "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1681405880~exp=1681406480~hmac=282958a85d24a5a7a798f8105b4fd2f8359b945b69800835c2ea1fb6c5ddd3a3",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 18,
    "name": "Margherita pizza",
    "price": 299,
    "image": "https://img.freepik.com/free-photo/hawaiian-pizza-with-cooked-ham-pizza-sauce-cheese-pineapple_140725-10942.jpg?w=996&t=st=1681408264~exp=1681408864~hmac=414617723644629a9ac74d3bae1b5a8eb7cd2d51999937c0c9e157a8e446ba69",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 19,
    "name": "Cheese pepperoni ",
    "price": 319,
    "image": "https://img.freepik.com/free-photo/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls_114579-1963.jpg?w=900&t=st=1681408362~exp=1681408962~hmac=56d22176d09eb50c8fc4f3f598cdc37051fafdf53ec029d1196f26c2ed1af040",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 20,
    "name": "Any 2 combo",
    "price": 549,
    "image": "https://img.freepik.com/free-photo/two-kind-pizza-table_140725-5573.jpg?w=740&t=st=1681408398~exp=1681408998~hmac=b86366275089e8068bfb9541ae8ec96322eb2c11cda180390a8d75f87344a207",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

]

const fries = [
  {
    "id": 21,
    "name": "French Fries",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1681408625~exp=1681409225~hmac=146de81cd90a83953a0517c9f425613aac26d79fc32211aeb24a222e8b1cc26e",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

const hotBeverage = [
  {
    "id": 22,
    "name": "Latte",
    "price": 59,
    "image": "https://img.freepik.com/free-photo/latte-coffee_1122-2728.jpg?w=996&t=st=1681465650~exp=1681466250~hmac=f9c24b618dcf2f822b7060c949b40c0e58802746634b39a1636149fa36c4c840",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 23,
    "name": "Vanilla Latte",
    "price": 99,
    "image": "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=900&t=st=1681465689~exp=1681466289~hmac=a70382f0f38a6558b1800fcce5f851c76a9556d17d2168321cba31fe4c2cb2eb",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 24,
    "name": "Capuccino",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/beautiful-fresh-relax-morning-coffee-cup-set_1150-7052.jpg?w=996&t=st=1681465653~exp=1681466253~hmac=083965665e6f4b8e2807231a62f05e65df44d8162a42de10a3e011ebbeae3f38",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 25,
    "name": "Espresso",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/close-up-view-brown-coffee-seeds-with-coffee-dark_179666-32787.jpg?size=626&ext=jpg&ga=GA1.2.1144094626.1659512730&semt=sph",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 26,
    "name": "Tea",
    "price": 19,
    "image": "https://img.freepik.com/free-photo/front-view-cup-cappuccino-with-sugar_140725-11389.jpg?w=740&t=st=1681465670~exp=1681466270~hmac=f8dfc15b7e1f5c166034b1c3c66203f544b7cdfeaed620335ea547b37a616952",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 27,
    "name": "Dark",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/espresso-dark-background-steam-rises-coffee-coffee-breakfast-italian-cafe-shop-vertical-shot-selective-focus_166373-2022.jpg?w=360&t=st=1681465589~exp=1681466189~hmac=e393af4acacd55817695dcd0a9753a9042fb142863ffcbfe63598177263bf272",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 28,
    "name": "Black Tea",
    "price": 19,
    "image": "https://img.freepik.com/free-photo/tea-splashes-white-cup-black-background_8353-1512.jpg?w=996&t=st=1681465756~exp=1681466356~hmac=b31a3b1c3e0fb6f46924ffa3a25b26f32eaf23c771102617a4842e0fdce37375",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 29,
    "name": "Americano",
    "price": 59,
    "image": "https://img.freepik.com/free-psd/coffee-cup-icon-isolated-3d-render-illustration_47987-8773.jpg?w=740&t=st=1681465601~exp=1681466201~hmac=9ddc02b4464b4fbfc85581b65552d0bdd74eb8feb449584efabfbdb2fe2e98c3",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 30,
    "name": "Mocha",
    "price": 69,
    "image": "https://img.freepik.com/free-vector/white-cup-hot-coffee-with-cinnamon-saucer-beans-wooden-table-realistic_1284-56783.jpg?w=826&t=st=1681465566~exp=1681466166~hmac=f2813861e3ed5411271bc34ecee7cc6ed03bd381627c39b6f820c4196cc8704d",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 31,
    "name": "Cookies -6N",
    "price": 29,
    "image": "https://img.freepik.com/free-photo/pile-cookies-cloth-wooden-table_1150-19666.jpg?w=996&t=st=1681466197~exp=1681466797~hmac=b5416cfbcd5c81b43ccd6bb219335d19a4dc48406d01cfab4513be24f09242b4",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
const coldBeverage = [
  {
    "id": 32,
    "name": "Unicorn",
    "price": 249,
    "image": "https://img.freepik.com/free-photo/delicious-milkshake-pink-background_23-2148601255.jpg?w=360&t=st=1681464822~exp=1681465422~hmac=a08a2049936a1a7793a5211b1fdcb744264b12bf2edfd3be27396d22a861876f",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 33,
    "name": "Chocolate Dive",
    "price": 149,
    "image": "https://img.freepik.com/free-photo/front-view-chocolate-dessert-glass-with-straw_23-2148603311.jpg?w=360&t=st=1681464679~exp=1681465279~hmac=0f45684f456c46cebae71f86dc18d4fa3ac7c4d07131b535e2887bf489c1a175",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 34,
    "name": "Strawberry",
    "price": 129,
    "image": "https://img.freepik.com/free-photo/strawberry-milkshake-with-ice-table_140725-5486.jpg?w=740&t=st=1681464666~exp=1681465266~hmac=5867629b9e41a5a900860ffdce36e95ff836d78b87d91243ae834c284e740f21",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 35,
    "name": "Dark Chocolate",
    "price": 139,
    "image": "https://img.freepik.com/free-photo/glass-chocolate-shake-table_23-2148922869.jpg?w=360&t=st=1681464788~exp=1681465388~hmac=e61e6ea762c8aa133a46bb2206537f3a82f03ad05f1ab5a9d87419cfd82c4c7d",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 36,
    "name": "Mango",
    "price": 119,
    "image": "https://img.freepik.com/free-photo/delicious-indian-mango-drink-with-pistachio_23-2148734681.jpg?w=740&t=st=1681464810~exp=1681465410~hmac=1dfd6fb1e7976f55efcd4e7733016ab6b9cb6d4754f06aa01a15c6b7ff1cc15f",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 37,
    "name": "Cool buzz",
    "price": 169,
    "image": "https://img.freepik.com/free-photo/front-view-milkshake-yellow-background_23-2148296095.jpg?w=360&t=st=1681464880~exp=1681465480~hmac=a76b1192e6b34b92704c59b1769ba94dfce44102f491546beefbd93b1a50349c",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 38,
    "name": "Cold Coffee",
    "price": 149,
    "image": "https://img.freepik.com/free-photo/cup-three-layered-coffee-dark_140725-6011.jpg?w=360&t=st=1681465197~exp=1681465797~hmac=2df7f99e66dc0ee2683c009221037dfd3caa6a6597012099f39c48d628744e61",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 39,
    "name": "Oreo Shake",
    "price": 169,
    "image": "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?w=740&t=st=1681465166~exp=1681465766~hmac=f1ea30dc5974f4a0cc05b45e81df10d9a881c1f718de1f8d5a2a95a31babf311",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 40,
    "name": "Pink Island",
    "price": 189,
    "image": "https://img.freepik.com/free-photo/front-view-delicious-milkshake-wooden-table_23-2148296076.jpg?w=360&t=st=1681465162~exp=1681465762~hmac=ad823555aa00eeab2c973a2e039ba7f0905f9ef1d9173d2a4739badd227f999c",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 41,
    "name": "Choco Overload",
    "price": 249,
    "image": "https://img.freepik.com/free-photo/glass-chocolate-shake-table_23-2148922877.jpg?w=740&t=st=1681465165~exp=1681465765~hmac=d285ab6e527e88b52deda9682490b12e11177ed5c40903bb5de45196a02fb5ff",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
const cocktail = [
  {
    "id": 42,
    "name": "Mojito",
    "price": 149,
    "image": "https://img.freepik.com/free-photo/lime-cocktail-mint-side-view_140725-11289.jpg?w=740&t=st=1681468178~exp=1681468778~hmac=6a775bb2f1c7a26b1f733adbfe9860b2fe507a29c03c4248bb93016d6175ca92",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 43,
    "name": "Gin Buzz",
    "price": 349,
    "image": "https://img.freepik.com/free-photo/red-cocktail-with-peeled-orange-skin-minced-ice-cubes_114579-3394.jpg?w=740&t=st=1681469502~exp=1681470102~hmac=49292b50f7763081cb65c78cadabea5fb4b12d52fd66055e91917c0278f2d0d1",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 44,
    "name": "Cool Blue",
    "price": 159,
    "image": "https://img.freepik.com/free-photo/blue-lagoon-with-cucumber_140725-1306.jpg?w=826&t=st=1681469463~exp=1681470063~hmac=6c3e815a94423b4264ff2fe1acbb320fa6174a604f736dc71d904272bf2b88dd",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 45,
    "name": "Bloody Mary",
    "price": 189,
    "image": "https://img.freepik.com/free-photo/red-cranberry-cocktail-with-lemon-slice_140725-44401.jpg?w=740&t=st=1681469855~exp=1681470455~hmac=9d2e9972ae321effb80a203877db9f6298b9d2faf675d523d02a642e220a451d",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 46,
    "name": "Mai Tai",
    "price": 199,
    "image": "https://img.freepik.com/free-photo/cocktail-topped-with-orange-slice_141793-643.jpg?w=740&t=st=1681468208~exp=1681468808~hmac=41e8f4299d075dd525424b255055e971437850d35f6cc1b6c4fd5288b4f1cd41",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 47,
    "name": "Apple Tini",
    "price": 139,
    "image": "https://img.freepik.com/free-photo/green-sparkling-water-christmas-table-with-red-candles_140725-10539.jpg?w=740&t=st=1681469337~exp=1681469937~hmac=35574143d0a44964423fe11f5869ad319bebbba890e566178b41b645926970aa",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 48,
    "name": "Manhattan",
    "price": 189,
    "image": "https://img.freepik.com/free-photo/red-sangria-table_140725-5427.jpg?w=740&t=st=1681470021~exp=1681470621~hmac=b5a4e30b45e19e53f3e5c78ba89ca616210999db3f87d64216b4eee0e91e7cef",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 49,
    "name": "Sazerac",
    "price": 229,
    "image": "https://img.freepik.com/free-photo/lemon-cocktail-with-green-table_140725-4787.jpg?w=740&t=st=1681470093~exp=1681470693~hmac=fc23fdb9da6d5ef7069a0b5721d810357cc6880a06d3c364442f249462f68290",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 50,
    "name": "Screwdriver",
    "price": 239,
    "image": "https://img.freepik.com/free-photo/orange-cocktail-with-ice-orange-slies_140725-1588.jpg?w=740&t=st=1681470465~exp=1681471065~hmac=444ec4027da20f84c1c4e8113a6a07269f2277d74ce3d4f4b798eb15ff60d0a7",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 51,
    "name": "Long Island",
    "price": 279,
    "image": "https://img.freepik.com/free-photo/strawberry-mojito-with-ice-table_140725-6824.jpg?w=740&t=st=1681470438~exp=1681471038~hmac=71d9542772e97f2085bf327d103ddbf6f3f489e059e10cc86b72fe6c77a19e1f",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]

export {Product, juices, shakes, burgers, pizza, fries, hotBeverage, coldBeverage, cocktail}
