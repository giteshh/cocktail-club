interface HotBeverage {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ColdBeverage {
  id: number;
  name: string;
  price: number;
  image: string;
}


const hotBeverage = [
  {
    "id": 1,
    "name": "Latte",
    "price": 59,
    "image": "https://img.freepik.com/free-photo/latte-coffee_1122-2728.jpg?w=996&t=st=1681465650~exp=1681466250~hmac=f9c24b618dcf2f822b7060c949b40c0e58802746634b39a1636149fa36c4c840",
  },
  {
    "id": 2,
    "name": "Vanilla Latte",
    "price": 99,
    "image": "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=900&t=st=1681465689~exp=1681466289~hmac=a70382f0f38a6558b1800fcce5f851c76a9556d17d2168321cba31fe4c2cb2eb",
  },
  {
    "id": 3,
    "name": "Capuccino",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/beautiful-fresh-relax-morning-coffee-cup-set_1150-7052.jpg?w=996&t=st=1681465653~exp=1681466253~hmac=083965665e6f4b8e2807231a62f05e65df44d8162a42de10a3e011ebbeae3f38",
  },
  {
    "id": 4,
    "name": "Espresso",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/close-up-view-brown-coffee-seeds-with-coffee-dark_179666-32787.jpg?size=626&ext=jpg&ga=GA1.2.1144094626.1659512730&semt=sph",
  },
  {
    "id": 5,
    "name": "Tea",
    "price": 19,
    "image": "https://img.freepik.com/free-photo/front-view-cup-cappuccino-with-sugar_140725-11389.jpg?w=740&t=st=1681465670~exp=1681466270~hmac=f8dfc15b7e1f5c166034b1c3c66203f544b7cdfeaed620335ea547b37a616952",
  },
  {
    "id": 6,
    "name": "Dark",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/espresso-dark-background-steam-rises-coffee-coffee-breakfast-italian-cafe-shop-vertical-shot-selective-focus_166373-2022.jpg?w=360&t=st=1681465589~exp=1681466189~hmac=e393af4acacd55817695dcd0a9753a9042fb142863ffcbfe63598177263bf272",
  },
  {
    "id": 7,
    "name": "Black Tea",
    "price": 19,
    "image": "https://img.freepik.com/free-photo/tea-splashes-white-cup-black-background_8353-1512.jpg?w=996&t=st=1681465756~exp=1681466356~hmac=b31a3b1c3e0fb6f46924ffa3a25b26f32eaf23c771102617a4842e0fdce37375",
  },
  {
    "id": 8,
    "name": "Americano",
    "price": 59,
    "image": "https://img.freepik.com/free-psd/coffee-cup-icon-isolated-3d-render-illustration_47987-8773.jpg?w=740&t=st=1681465601~exp=1681466201~hmac=9ddc02b4464b4fbfc85581b65552d0bdd74eb8feb449584efabfbdb2fe2e98c3",
  },
  {
    "id": 9,
    "name": "Mocha",
    "price": 69,
    "image": "https://img.freepik.com/free-vector/white-cup-hot-coffee-with-cinnamon-saucer-beans-wooden-table-realistic_1284-56783.jpg?w=826&t=st=1681465566~exp=1681466166~hmac=f2813861e3ed5411271bc34ecee7cc6ed03bd381627c39b6f820c4196cc8704d",
  },
  {
    "id": 10,
    "name": "Cookies -6N",
    "price": 29,
    "image": "https://img.freepik.com/free-photo/pile-cookies-cloth-wooden-table_1150-19666.jpg?w=996&t=st=1681466197~exp=1681466797~hmac=b5416cfbcd5c81b43ccd6bb219335d19a4dc48406d01cfab4513be24f09242b4",
  },

]
const coldBeverage = [
  {
    "id": 1,
    "name": "Unicorn",
    "price": 249,
    "image": "https://img.freepik.com/free-photo/delicious-milkshake-pink-background_23-2148601255.jpg?w=360&t=st=1681464822~exp=1681465422~hmac=a08a2049936a1a7793a5211b1fdcb744264b12bf2edfd3be27396d22a861876f",
  },
  {
    "id": 2,
    "name": "Chocolate Dive",
    "price": 149,
    "image": "https://img.freepik.com/free-photo/front-view-chocolate-dessert-glass-with-straw_23-2148603311.jpg?w=360&t=st=1681464679~exp=1681465279~hmac=0f45684f456c46cebae71f86dc18d4fa3ac7c4d07131b535e2887bf489c1a175",
  },
  {
    "id": 3,
    "name": "Strawberry",
    "price": 129,
    "image": "https://img.freepik.com/free-photo/strawberry-milkshake-with-ice-table_140725-5486.jpg?w=740&t=st=1681464666~exp=1681465266~hmac=5867629b9e41a5a900860ffdce36e95ff836d78b87d91243ae834c284e740f21",
  },
  {
    "id": 4,
    "name": "Dark Chocolate",
    "price": 139,
    "image": "https://img.freepik.com/free-photo/glass-chocolate-shake-table_23-2148922869.jpg?w=360&t=st=1681464788~exp=1681465388~hmac=e61e6ea762c8aa133a46bb2206537f3a82f03ad05f1ab5a9d87419cfd82c4c7d",
  },
  {
    "id": 5,
    "name": "Mango",
    "price": 119,
    "image": "https://img.freepik.com/free-photo/delicious-indian-mango-drink-with-pistachio_23-2148734681.jpg?w=740&t=st=1681464810~exp=1681465410~hmac=1dfd6fb1e7976f55efcd4e7733016ab6b9cb6d4754f06aa01a15c6b7ff1cc15f",
  },
  {
    "id": 6,
    "name": "Cool buzz",
    "price": 169,
    "image": "https://img.freepik.com/free-photo/front-view-milkshake-yellow-background_23-2148296095.jpg?w=360&t=st=1681464880~exp=1681465480~hmac=a76b1192e6b34b92704c59b1769ba94dfce44102f491546beefbd93b1a50349c",
  },
  {
    "id": 7,
    "name": "Cold Coffee",
    "price": 149,
    "image": "https://img.freepik.com/free-photo/cup-three-layered-coffee-dark_140725-6011.jpg?w=360&t=st=1681465197~exp=1681465797~hmac=2df7f99e66dc0ee2683c009221037dfd3caa6a6597012099f39c48d628744e61",
  },
  {
    "id": 8,
    "name": "Oreo Shake",
    "price": 169,
    "image": "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?w=740&t=st=1681465166~exp=1681465766~hmac=f1ea30dc5974f4a0cc05b45e81df10d9a881c1f718de1f8d5a2a95a31babf311",
  },
  {
    "id": 9,
    "name": "Pink Island",
    "price": 189,
    "image": "https://img.freepik.com/free-photo/front-view-delicious-milkshake-wooden-table_23-2148296076.jpg?w=360&t=st=1681465162~exp=1681465762~hmac=ad823555aa00eeab2c973a2e039ba7f0905f9ef1d9173d2a4739badd227f999c",
  },
  {
    "id": 10,
    "name": "Choco Overload",
    "price": 249,
    "image": "https://img.freepik.com/free-photo/glass-chocolate-shake-table_23-2148922877.jpg?w=740&t=st=1681465165~exp=1681465765~hmac=d285ab6e527e88b52deda9682490b12e11177ed5c40903bb5de45196a02fb5ff",
  },

]


export {HotBeverage, ColdBeverage, hotBeverage, coldBeverage}
