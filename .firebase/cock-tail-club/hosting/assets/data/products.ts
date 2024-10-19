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
    "image": "/assets/images/products/juice/orange.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 2,
    "name": "Mixed Fruit",
    "price": 89,
    "image": "/assets/images/products/juice/mixedfruit.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 3,
    "name": "Lemonade",
    "price": 29,
    "image": "/assets/images/products/juice/lemonade.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 4,
    "name": "Pineapple",
    "price": 39,
    "image": "/assets/images/products/juice/pineapple.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 5,
    "name": "Watermelon",
    "price": 39,
    "image": "/assets/images/products/juice/watermelon.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 6,
    "name": "Mango",
    "price": 39,
    "image": "/assets/images/products/juice/mango.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 7,
    "name": "Berry berry",
    "price": 39,
    "image": "/assets/images/products/juice/berryberry.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
const shakes = [
  {
    "id": 8,
    "name": "Kiwi",
    "price": 89,
    "image": "/assets/images/products/juice/kiwi.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 9,
    "name": "Mango",
    "price": 49,
    "image": "/assets/images/products/juice/mangoshake.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 10,
    "name": "Strawberry",
    "price": 59,
    "image": "/assets/images/products/juice/strawberry.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 11,
    "name": "Banana",
    "price": 39,
    "image": "/assets/images/products/juice/banana.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 12,
    "name": "Coconut Crush",
    "price": 119,
    "image": "/assets/images/products/juice/coconutcrush.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 13,
    "name": "Cold coco",
    "price": 89,
    "image": "/assets/images/products/juice/coldcoco.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 14,
    "name": "Chocolate",
    "price": 79,
    "image": "/assets/images/products/juice/chocolate.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]

const burgers = [
  {
    "id": 15,
    "name": "Double patty",
    "price": 169,
    "image": "/assets/images/products/fastfood/doublepatty.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 16,
    "name": "Veggie",
    "price": 39,
    "image": "/assets/images/products/fastfood/veggie.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 17,
    "name": "Burger + Fries",
    "price": 189,
    "image": "/assets/images/products/fastfood/burger+fries.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 18,
    "name": "Double patty",
    "price": 229,
    "image": "/assets/images/products/fastfood/doubleburger.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 19,
    "name": "Aaloo tikki",
    "price": 59,
    "image": "/assets/images/products/fastfood/aalootikki.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 20,
    "name": "Black bun",
    "price": 199,
    "image": "/assets/images/products/fastfood/blackbun.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 21,
    "name": "Mexican",
    "price": 99,
    "image": "/assets/images/products/fastfood/mexican.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
const pizza = [
  {
    "id": 22,
    "name": "Cheesilious",
    "price": 699,
    "image": "/assets/images/products/fastfood/cheesilisious.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 23,
    "name": "Fresh veggie",
    "price": 399,
    "image": "/assets/images/products/fastfood/freshveggie.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 24,
    "name": "Margherita",
    "price": 299,
    "image": "/assets/images/products/fastfood/margherita.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 25,
    "name": "Pepperoni",
    "price": 319,
    "image": "/assets/images/products/fastfood/pepperoni.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 26,
    "name": "Italian",
    "price": 549,
    "image": "/assets/images/products/fastfood/italian.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 27,
    "name": "Paneer onion",
    "price": 249,
    "image": "/assets/images/products/fastfood/paneeronion.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 28,
    "name": "Tandoori",
    "price": 449,
    "image": "/assets/images/products/fastfood/anycombo.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]

const fries = [
  {
    "id": 29,
    "name": "French Fries",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1681408625~exp=1681409225~hmac=146de81cd90a83953a0517c9f425613aac26d79fc32211aeb24a222e8b1cc26e",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

const hotBeverage = [
  {
    "id": 30,
    "name": "Latte",
    "price": 59,
    "image": "/assets/images/products/beverage/latte.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 31,
    "name": "Vanilla Latte",
    "price": 99,
    "image": "/assets/images/products/beverage/vanillalatte.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 32,
    "name": "Cappuccino",
    "price": 49,
    "image": "/assets/images/products/beverage/cappuccino.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 33,
    "name": "Espresso",
    "price": 49,
    "image": "/assets/images/products/beverage/espresso.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 34,
    "name": "Americano",
    "price": 59,
    "image": "/assets/images/products/beverage/americano.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 35,
    "name": "Mocha",
    "price": 69,
    "image": "/assets/images/products/beverage/mocha.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 36,
    "name": "Dark Coffee",
    "price": 39,
    "image": "/assets/images/products/beverage/darkcoffee.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 37,
    "name": "Ginger Tea",
    "price": 19,
    "image": "/assets/images/products/beverage/gingertea.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 38,
    "name": "Cardamom Tea",
    "price": 19,
    "image": "/assets/images/products/beverage/cardamon.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 39,
    "name": "Black Tea",
    "price": 19,
    "image": "/assets/images/products/beverage/blacktea.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 40,
    "name": "Hot Lemon Tea",
    "price": 29,
    "image": "/assets/images/products/beverage/lemontea.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 41,
    "name": "Lemon grass tea",
    "price": 39,
    "image": "/assets/images/products/beverage/lemongrass.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 42,
    "name": "Masala Latte Tea",
    "price": 49,
    "image": "/assets/images/products/beverage/masalatea.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 43,
    "name": "Cookies -6N",
    "price": 29,
    "image": "/assets/images/products/beverage/cookies.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
const coldBeverage = [
  {
    "id": 44,
    "name": "Unicorn",
    "price": 249,
    "image": "/assets/images/products/beverage/unicorn.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 45,
    "name": "Chocolate Dive",
    "price": 149,
    "image": "/assets/images/products/beverage/chocolatedrive.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 46,
    "name": "Strawberry",
    "price": 129,
    "image": "/assets/images/products/beverage/strawberry.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 47,
    "name": "Dark Chocolate",
    "price": 139,
    "image": "/assets/images/products/beverage/darkchocolate.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 48,
    "name": "Mango",
    "price": 119,
    "image": "/assets/images/products/beverage/mangoshake.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 49,
    "name": "Cool buzz",
    "price": 169,
    "image": "/assets/images/products/beverage/coolbuzz.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 50,
    "name": "Cold Coffee",
    "price": 149,
    "image": "/assets/images/products/beverage/coldcoffee.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 51,
    "name": "Oreo Shake",
    "price": 169,
    "image": "/assets/images/products/beverage/oreo.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 52,
    "name": "Pink Island",
    "price": 189,
    "image": "/assets/images/products/beverage/pinkisland.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 53,
    "name": "Choco Overload",
    "price": 249,
    "image": "/assets/images/products/beverage/chocooverload.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 54,
    "name": "Frozen princess",
    "price": 229,
    "image": "/assets/images/products/beverage/frozenprincess.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 55,
    "name": "Iced Tea",
    "price": 69,
    "image": "/assets/images/products/beverage/icedtea.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 56,
    "name": "Iced coffee",
    "price": 79,
    "image": "/assets/images/products/beverage/icedcoffee.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 57,
    "name": "Iced lemon tea",
    "price": 89,
    "image": "/assets/images/products/beverage/icedlemontea.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
const cocktail = [
  {
    "id": 58,
    "name": "Mojito",
    "price": 149,
    "image": "/assets/images/products/cocktail/mojito.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 59,
    "name": "Gin Buzz",
    "price": 349,
    "image": "/assets/images/products/cocktail/ginbuzz.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 60,
    "name": "Cool Blue",
    "price": 159,
    "image": "/assets/images/products/cocktail/coolblue.png", // "image": "https://img.freepik.com/free-photo/blue-lagoon-with-cucumber_140725-1306.jpg?w=826&t=st=1681469463~exp=1681470063~hmac=6c3e815a94423b4264ff2fe1acbb320fa6174a604f736dc71d904272bf2b88dd",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 61,
    "name": "Bloody Mary",
    "price": 189,
    "image": "/assets/images/products/cocktail/bloodymary.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 62,
    "name": "Mai Tai",
    "price": 199,
    "image": "/assets/images/products/cocktail/maitai.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 63,
    "name": "Apple Tini",
    "price": 139,
    "image": "/assets/images/products/cocktail/appletini.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 64,
    "name": "Manhattan",
    "price": 189,
    "image": "/assets/images/products/cocktail/manhattan.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 65,
    "name": "Sazerac",
    "price": 229,
    "image": "/assets/images/products/cocktail/sazerac.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 66,
    "name": "Screwdriver",
    "price": 239,
    "image": "/assets/images/products/cocktail/screwdriver.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 67,
    "name": "Long Island",
    "price": 279,
    "image": "/assets/images/products/cocktail/longisland.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 68,
    "name": "Pina Colada",
    "price": 349,
    "image": "/assets/images/products/cocktail/pinacolada.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 69,
    "name": "Berry Margarita",
    "price": 279,
    "image": "/assets/images/products/cocktail/berrymargarita.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 70,
    "name": "Lime Margarita",
    "price": 279,
    "image": "/assets/images/products/cocktail/limemargarita.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 71,
    "name": "Whiskey Sour",
    "price": 279,
    "image": "/assets/images/products/cocktail/whiskeysour.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]

const beers = [
  {
    "id": 72,
    "name": "Budweiser Magnum",
    "price": 280,
    "image": "/assets/images/products/beers/budweiser-magnum.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 73,
    "name": "Budweiser",
    "price": 190,
    "image": "/assets/images/products/beers/budweiser.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 74,
    "name": "Carlsberg Elephant",
    "price": 220,
    "image": "/assets/images/products/beers/carlsberg-elephant.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 75,
    "name": "Kingfisher Ultra",
    "price": 180,
    "image": "/assets/images/products/beers/kingfisher-ultra.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 76,
    "name": "Kingfisher Strong",
    "price": 200,
    "image": "/assets/images/products/beers/kingfisher-strong.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 77,
    "name": "Tuborg",
    "price": 160,
    "image": "/assets/images/products/beers/tuborg.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 78,
    "name": "Bira Boom",
    "price": 190,
    "image": "/assets/images/products/beers/bira-boom.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 79,
    "name": "Heineken",
    "price": 240,
    "image": "/assets/images/products/beers/heineken.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 80,
    "name": "Godfather",
    "price": 250,
    "image": "/assets/images/products/beers/godfather.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 81,
    "name": "Bira Blonde",
    "price": 180,
    "image": "/assets/images/products/beers/bira-blonde.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 82,
    "name": "Carlsberg",
    "price": 170,
    "image": "/assets/images/products/beers/carlsberg.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 83,
    "name": "Royal Challenge",
    "price": 150,
    "image": "/assets/images/products/beers/royal-challenge-beer.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 84,
    "name": "Haywards 5000",
    "price": 120,
    "image": "/assets/images/products/beers/haywards5000.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 85,
    "name": "Simba",
    "price": 140,
    "image": "/assets/images/products/beers/simba.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]

const alcohol = [
  {
    "id": 86,
    "name": "Black Dog",
    "price": 6500,
    "image": "/assets/images/products/alcohol/black-dog.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 87,
    "name": "Ballentine's",
    "price": 5650,
    "image": "/assets/images/products/alcohol/ballentines.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 88,
    "name": "Jack Daniel's",
    "price": 4590,
    "image": "/assets/images/products/alcohol/jack-deniels.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 89,
    "name": "Chivas Regal",
    "price": 180,
    "image": "/assets/images/products/alcohol/chivas-regal.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 90,
    "name": "Jameson",
    "price": 3059,
    "image": "/assets/images/products/alcohol/jameson.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 91,
    "name": "Red Label",
    "price": 2830,
    "image": "/assets/images/products/alcohol/red-label.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 92,
    "name": "Blue Label",
    "price": 2900,
    "image": "/assets/images/products/alcohol/blue-label.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 93,
    "name": "Indri",
    "price": 3700,
    "image": "/assets/images/products/alcohol/indri.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 94,
    "name": "Teacher's",
    "price": 2030,
    "image": "/assets/images/products/alcohol/teachers.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 95,
    "name": "Vat 69",
    "price": 1856,
    "image": "/assets/images/products/alcohol/vat69.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 96,
    "name": "McDowell's No1",
    "price": 1800,
    "image": "/assets/images/products/alcohol/mcdowells-no1.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 97,
    "name": "Blender's Pride",
    "price": 1450,
    "image": "/assets/images/products/alcohol/blenders-pride.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 98,
    "name": "Royal Challenge",
    "price": 970,
    "image": "/assets/images/products/alcohol/royal-challenge.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 99,
    "name": "Royal Stag",
    "price": 990,
    "image": "/assets/images/products/alcohol/royal-stag.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 100,
    "name": "Old Monk",
    "price": 1050,
    "image": "/assets/images/products/alcohol/old-monk.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 101,
    "name": "Champagne",
    "price": 1200,
    "image": "/assets/images/products/alcohol/champagne.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 102,
    "name": "Absolut Vodka",
    "price": 2090,
    "image": "/assets/images/products/alcohol/absolut-vodka.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 103,
    "name": "Magic Moments Orange",
    "price": 880,
    "image": "/assets/images/products/alcohol/magic-moments-orange.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 104,
    "name": "Magic Moments-Apple",
    "price": 880,
    "image": "/assets/images/products/alcohol/magic-moments-apple.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 105,
    "name": "Red Wine",
    "price": 990,
    "image": "/assets/images/products/alcohol/red-wine.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 106,
    "name": "Joven Tequila",
    "price": 2070,
    "image": "/assets/images/products/alcohol/tequila.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]

const cigarettes = [
  {
    "id": 107,
    "name": "Badi Goldflake",
    "price": 65,
    "image": "/assets/images/products/cigarettes/badi-goldflake.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 108,
    "name": "Choti Goldflake",
    "price": 56,
    "image": "/assets/images/products/cigarettes/choti-goldflake.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 109,
    "name": "Badi Goldflake Light",
    "price": 45,
    "image": "/assets/images/products/cigarettes/badi-goldflake-light.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 110,
    "name": "Choti Goldflake Light",
    "price": 40,
    "image": "/assets/images/products/cigarettes/choti-goldflake-light.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 111,
    "name": "Paan",
    "price": 59,
    "image": "/assets/images/products/cigarettes/goldflake-paan.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 112,
    "name": "Regular",
    "price": 30,
    "image": "/assets/images/products/cigarettes/classic-regular.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 113,
    "name": "Mild",
    "price": 40,
    "image": "/assets/images/products/cigarettes/classic-mild.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 114,
    "name": "Ultramild",
    "price": 80,
    "image": "/assets/images/products/cigarettes/classic-ultramild.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 115,
    "name": "Connect",
    "price": 70,
    "image": "/assets/images/products/cigarettes/classic-connect.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 116,
    "name": "Double Switch",
    "price": 65,
    "image": "/assets/images/products/cigarettes/classic-doubleswitch.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 117,
    "name": "Advance",
    "price": 85,
    "image": "/assets/images/products/cigarettes/advance.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 118,
    "name": "Choti Advance",
    "price": 95,
    "image": "/assets/images/products/cigarettes/choti-advance.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 119,
    "name": "Clove Mix",
    "price": 97,
    "image": "/assets/images/products/cigarettes/clove-mix.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 120,
    "name": "Marlboro Double Switch",
    "price": 99,
    "image": "/assets/images/products/cigarettes/double-switch.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 121,
    "name": "Pocket",
    "price": 105,
    "image": "/assets/images/products/cigarettes/pocket.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 122,
    "name": "American Fruit",
    "price": 120,
    "image": "/assets/images/products/cigarettes/american-fruit.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 123,
    "name": "American Clove",
    "price": 110,
    "image": "/assets/images/products/cigarettes/american-clove.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 124,
    "name": "Flake Excel",
    "price": 88,
    "image": "/assets/images/products/cigarettes/flake-excel.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 125,
    "name": "Flake Liberty",
    "price": 88,
    "image": "/assets/images/products/cigarettes/flake-liberty.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 126,
    "name": "Flake Mint",
    "price": 99,
    "image": "/assets/images/products/cigarettes/flake-mint.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 127,
    "name": "Bristol",
    "price": 105,
    "image": "/assets/images/products/cigarettes/bristol.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]
const snacks = [
  {
    "id": 128,
    "name": "Peanuts",
    "price": 20,
    "image": "/assets/images/products/snacks/peanuts.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 129,
    "name": "Cashew Nuts",
    "price": 60,
    "image": "/assets/images/products/snacks/cashew-nuts.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 130,
    "name": "Simply Salted",
    "price": 30,
    "image": "/assets/images/products/snacks/simply-salted.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 131,
    "name": "Cream & Onions",
    "price": 30,
    "image": "/assets/images/products/snacks/cream-and-onions.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 132,
    "name": "Tomato Twist",
    "price": 30,
    "image": "/assets/images/products/snacks/tomato-twist.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 133,
    "name": "Pringles",
    "price": 70,
    "image": "/assets/images/products/snacks/pringles.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 134,
    "name": "Doritos",
    "price": 50,
    "image": "/assets/images/products/snacks/doritos.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

const coldDrinks = [
  {
    "id": 135,
    "name": "Sprite",
    "price": 40,
    "image": "/assets/images/products/cold-drink/sprite.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 136,
    "name": "Soda",
    "price": 50,
    "image": "/assets/images/products/cold-drink/soda.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 137,
    "name": "Coca Cola",
    "price": 45,
    "image": "/assets/images/products/cold-drink/coca-cola.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 138,
    "name": "Pepsi",
    "price": 40,
    "image": "/assets/images/products/cold-drink/pepsi.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 139,
    "name": "Mountain Dew",
    "price": 45,
    "image": "/assets/images/products/cold-drink/mountain-dew.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 140,
    "name": "Sting",
    "price": 20,
    "image": "/assets/images/products/cold-drink/sting.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 141,
    "name": "Jeeru",
    "price": 20,
    "image": "/assets/images/products/cold-drink/jeeru.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]
const partyEssentials = [
  {
    "id": 142,
    "name": "Vape Hookah",
    "price": 650,
    "image": "/assets/images/products/party-essentials/vape.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 143,
    "name": "Bottle Opener",
    "price": 50,
    "image": "/assets/images/products/party-essentials/bottle-opener.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 144,
    "name": "Lighter",
    "price": 10,
    "image": "/assets/images/products/party-essentials/lighter.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 145,
    "name": "Match Box",
    "price": 5,
    "image": "/assets/images/products/party-essentials/matchbox.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 146,
    "name": "Water Bottle",
    "price": 20,
    "image": "/assets/images/products/party-essentials/water-bottle.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 147,
    "name": "Ice Cubes",
    "price": 20,
    "image": "/assets/images/products/party-essentials/ice-box.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    "id": 148,
    "name": "Beer Mug",
    "price": 60,
    "image": "/assets/images/products/party-essentials/beer-mug.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 149,
    "name": "Disposable Glass",
    "price": 10,
    "image": "/assets/images/products/party-essentials/disposable-glass.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 150,
    "name": "Disposable plate",
    "price": 10,
    "image": "/assets/images/products/party-essentials/disposable-plate.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 151,
    "name": "Confetti/Bomber",
    "price": 80,
    "image": "/assets/images/products/party-essentials/confetti.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 152,
    "name": "Playing Cards",
    "price": 30,
    "image": "/assets/images/products/party-essentials/cards.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 153,
    "name": "UNO Cards",
    "price": 40,
    "image": "/assets/images/products/party-essentials/uno-cards.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 154,
    "name": "Tissue Box",
    "price": 50,
    "image": "/assets/images/products/party-essentials/tissue-box.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 155,
    "name": "Sunglass",
    "price": 20,
    "image": "/assets/images/products/party-essentials/party-glasses.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 156,
    "name": "Party Mask",
    "price": 10,
    "image": "/assets/images/products/party-essentials/party-mask.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 157,
    "name": "Perfume",
    "price": 15,
    "image": "/assets/images/products/party-essentials/perfume-spray.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 158,
    "name": "Acidity Tablet",
    "price": 40,
    "image": "/assets/images/products/party-essentials/acidity-tablet.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 159,
    "name": "Vomiting Tablet",
    "price": 20,
    "image": "/assets/images/products/party-essentials/vomit-tablet.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

const rentSpeaker = [
  {
    "id": 160,
    "name": "Party Speaker",
    "price": 200,
    "image": "/assets/images/products/rent-party-speaker/speaker.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 161,
    "name": "Disco Lights",
    "price": 250,
    "image": "/assets/images/products/rent-party-speaker/disco-light.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 162,
    "name": "Hookah",
    "price": 180,
    "image": "/assets/images/products/rent-party-speaker/hookah.png",
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

export {
  Product, juices, shakes, burgers, pizza, fries, hotBeverage,
  coldBeverage, cocktail, beers, alcohol, cigarettes, snacks, coldDrinks, partyEssentials, rentSpeaker
}
