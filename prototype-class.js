//class discussion
// Prototype chaining ---->

function Human(name) {
  this.name = name;
}

Human.prototype.getName = function () {
  return this.name;
};

const h1 = new Human("john");
h1.getName = function () {
  console.log(99292929292929);
};

// console.log(h1);
// console.log(h1.getName());

const h2 = new Human("joe");

h2.getName = function () {
  return this.name;
};

// console.log(h2.getName());

const h3 = new Human("loui");
// console.log(h3.getName());

class Vehicle {}

Vehicle.prototype.print = function () {
  console.log(9);
};

// new Vehicle().print();

// How to attach properties to prototype when the constructor function or class is not given
// or you just have the object

Object.prototype.getName = function () {
  return this.name;
};

let obj = {
  name: "john",
};

let obj2 = {
  name: "Juna",
};

// custom method
obj.__proto__.getName = function () {
  return this.name;
};

// console.log(obj.getName(), obj2.getName());

// console.log(obj.__proto__ === Object.prototype);

/// Ways to create custom methods

class A {
  print() {}
}

function Hi(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

// console.log(new Hi("Abhay").getName());

//
//
//
// Use of prototypes

let arrr = [1, 2, 3, 4, 45];

let arr2 = [10, -2, 30, 4, 455];

//arr.sum()// the sum of the array

Array.prototype.sum = function () {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }

  return sum;
};

// console.log(arrr.sum());
// console.log(arr2.sum());

Array.prototype.myforEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

let arr = [1, 2, 3, 34, 4];

arr.forEach(function (ele, i, arr) {
  console.log(ele, i, arr);
});

arr.myforEach(function (ele, i, arr) {
  console.log("custom", ele, i, arr);
});

// other code
//.
//.
//.
// class Animal {
//   constructor(hands, legs, fur, feather, vision, foodDependency) {
//     this.hands = hands;
//     this.legs = legs;
//     this.fur = fur;;
//     this.feather = feather;
//     this.vision = vision;
//     this.foodDependency = foodDependency;
//   }

//   createAnimal(hands, legs, vision, foodDependency) {
//     this.animal = `Your created animal has ${this.hands == undefined ? hands ? this.hands} hands, ${this.legs == undefined ? legs : this.legs} legs, ${this.fur ? 'has furs' : 'no furs'}, ${this.feather ? "has feathers" : 'no feathers'}, it has ${this.vision === undefined ? vision : this.vision} vision, it depends on ${this.foodDependency == undefined ? foodDependency : this.foodDependency}`

//     return this.animal;
//   }
// }

// let cow = new Animal(0, 4, false, false, "binocular", "nature as well as human");
// //console.log(cow.createAnimal());

// class Homosepience extends Animal {

//   constructor(thoughtProcess, foodHabit) {
//     super();
//     this.thoughtProcess = thoughtProcess;
//     this.foodHabit = foodHabit;
//   }

//   createHomo() {
//     this.homo = this.createAnimal(2,2,'monocular', 'own maked food');
//    // console.log('homo', this.homo)
//     this.homo2 = `${this.homo} it has also ${this.thoughtProcess} and used to ${this.foodHabit}`;

//     return this.homo2
//   }

// }

// const human = new Homosepience('very good', 'cooked food');

// console.log(human.createHomo())
