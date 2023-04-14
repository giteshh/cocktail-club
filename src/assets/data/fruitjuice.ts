interface Juices {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Shakes {
  id: number;
  name: string;
  price: number;
  image: string;
}

const juices = [
  {
    "id": 1,
    "name": "Fresh Orange",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg?w=996&t=st=1681462817~exp=1681463417~hmac=1ba7893b17bde0764d84a84ea8de99f1b8fe6a259a519244b388d039d16265fb",
  },
  {
    "id": 2,
    "name": "Mixed Fruit",
    "price": 89,
    "image": "https://img.freepik.com/free-photo/summertime-smoothie-with-raspberry-blackberry-strawberry-ice_140725-3953.jpg?w=740&t=st=1681462942~exp=1681463542~hmac=c25fc1f4ac61835c2395228f205de16c8a65f342bce966538d089d8cbb3c7ed1",
  },
  {
    "id": 3,
    "name": "Lemon Water",
    "price": 29,
    "image": "https://img.freepik.com/free-photo/mojito-drink-with-lime-lemon-mint-wood-table_1150-12269.jpg?w=996&t=st=1681462965~exp=1681463565~hmac=6668feb4e0973f34a315f968d741b077c0e7181fa4244622e17b092c4863ab70",
  },
  {
    "id": 4,
    "name": "Pineapple",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/pineapple-juice-green-surface_1150-42297.jpg?w=996&t=st=1681464060~exp=1681464660~hmac=33d31575cc47ca95afe05bfbd59c50be80843c78aa7aabdf6483a65e2064f813",
  },
  {
    "id": 5,
    "name": "Watermelon",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/watermelon-smoothie_1339-457.jpg?w=360&t=st=1681463485~exp=1681464085~hmac=7ed6d164a3eb65dcbe8cf05fceaa1b0bded52fd1681f7b187e4266e2bf09aeb3",
  }

]
const shakes = [
  {
    "id": 1,
    "name": "Kiwi",
    "price": 89,
    "image": "https://img.freepik.com/free-photo/healthy-kiwi-smoothie-summer-recipe_53876-32273.jpg?w=900&t=st=1681462820~exp=1681463420~hmac=9b798392904ba104ce961acdb0988aef47e16b87a5f3a9d4df0e3de1c72d9de1",
  },
  {
    "id": 2,
    "name": "Mango",
    "price": 49,
    "image": "https://img.freepik.com/free-photo/delicious-indian-mango-drink-high-angle_23-2148734680.jpg?w=740&t=st=1681462893~exp=1681463493~hmac=d852ac749f918e1a06262d502ba5d5f244adbfe6f718d89bb94922c81563f4d9",
  },
  {
    "id": 3,
    "name": "Strawberry",
    "price": 59,
    "image": "https://img.freepik.com/free-photo/jar-strawberry-refreshing-drink-with-various-sugar-sprinkles_181624-56040.jpg?w=740&t=st=1681462994~exp=1681463594~hmac=bbb4e18490209a5432345707b7347f4e0bf75e8e74fe5f75e76ba38bab4fb6d3",
  },
  {
    "id": 4,
    "name": "Banana",
    "price": 39,
    "image": "https://img.freepik.com/free-photo/delicious-banana-milkshake_144627-5663.jpg?w=740&t=st=1681463028~exp=1681463628~hmac=e061ca18bd4599c4745fe07a5940d11f763a660ad9106e09cb2890dcc48b32be",
  },
  {
    "id": 5,
    "name": "Bananaberry",
    "price": 119,
    "image": "https://img.freepik.com/free-photo/fresh-strawberry-banana-smoothie-jar-wooden-table_123827-20782.jpg?w=996&t=st=1681464090~exp=1681464690~hmac=c9eac7540d6aaab4453a867e9e6039ebabb2ba780c65ae7cc42714a61907b47f",
  }

]


export {Juices, Shakes, juices, shakes}
