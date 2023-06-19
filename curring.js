//curring
// you have to use currying syntax to sort the array and multiply all the elements by a given number

//.
//.regular method class discussion 1
function foo(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.map((ele) => ele * num);
}

// console.log(foo([2, 7, 1, 88, 1888], 2));

//.
//.
// class discussion 2
function foo(arr) {
  // Just sorting
  arr.sort(function (a, b) {
    return a - b;
  });

  return function Multiplyby2(num) {
    // just multiplying by the num
    let mul = arr.map((ele) => ele * num);

    return function (divide) {
      // filtering
      return mul.filter((ele) => ele % divide == 0);
    };
  };
}
// currying syntax
console.log(foo([2, 7, 1, 88, 1888])(2)(4));

//.
//.
// function currying question
// 1- filter out all the elements that have age >30
// 2- filter out all the elments that have name start from S
// 3- return their  address in a map
let array = [
  {
    _id: "63cc03f8bf5296147c039352",
    age: 21,
    name: "Sarah Burton",
    address: "335 Hancock Street, Farmington, Delaware, 1057",
  },
  {
    _id: "63cc03f8c73463b068615f9f",
    age: 35,
    name: "Lynda Hart",
    address: "659 Oriental Court, Bannock, Texas, 3695",
  },
  {
    _id: "63cc03f828bc70444b7a37f5",
    age: 43,
    name: "Robyn Holmes",
    address: "220 Powell Street, Century, New Jersey, 8924",
  },
  {
    _id: "63cc03f80fe436e6d8623ba8",
    age: 20,
    name: "Hewitt Brady",
    address: "783 Krier Place, Fairlee, Virginia, 408",
  },
  {
    _id: "63cc03f87f045a5da68409e1",
    age: 57,
    name: "Corrine Pearson",
    address: "449 Verona Place, Sanford, Iowa, 6571",
  },
  {
    _id: "63cc03f81763eed1552e93f1",
    age: 34,
    name: "Margaret Lindsey",
    address: "331 Columbia Street, Allensworth, Arkansas, 6373",
  },
  {
    _id: "63cc03f891ea0cae4eb75b8a",
    age: 38,
    name: "Palmer Donaldson",
    address: "909 Anchorage Place, Chumuckla, South Dakota, 3993",
  },
  {
    _id: "63cc03f8e4111c60262e1ad6",
    age: 76,
    name: "Nieves Potts",
    address: "753 Dakota Place, Lewis, Florida, 194",
  },
  {
    _id: "63cc03f8a4dd9b0af8b7e902",
    age: 59,
    name: "Brandie Warren",
    address: "939 Duffield Street, Matthews, Guam, 5025",
  },
  {
    _id: "63cc03f84257ff99553768a0",
    age: 73,
    name: "Bush Harrell",
    address: "713 Terrace Place, Grill, Montana, 315",
  },
  {
    _id: "63cc03f87b785f5469e4a519",
    age: 84,
    name: "Shelly Cantu",
    address: "933 Brightwater Avenue, Hall, South Carolina, 4465",
  },
  {
    _id: "63cc03f87d8fde00908c22cd",
    age: 49,
    name: "Lamb Harris",
    address: "912 Division Place, Warren, Kentucky, 1375",
  },
  {
    _id: "63cc03f85d4bd1bcdd1556c0",
    age: 91,
    name: "Alexandra Galloway",
    address: "805 Roosevelt Place, Kennedyville, Minnesota, 4540",
  },
];

// method 1
function sorted1(array) {
  return array
    .filter((ele) => ele.age > 30)
    .filter((ele) => ele.name.slice("")[0] == "S")
    .map((ele) => ele.address);
}
console.log(sorted1(array));

// method 2 by curring
function sorted(array) {
  let age = array.filter((ele) => ele.age > 30);

  return function () {
    let name = age.filter((ele) => ele.name.slice("")[0] == "S");

    return function () {
      return name.map((ele) => ele.address);
    };
  };
}
console.log(sorted(array)()());
