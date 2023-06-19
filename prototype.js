// // Beheviour of OOP
// // JS is prtotype based language
// // prototype is propery of object that lincks object with its parent
// // prototype is propery of object

// // different ways to creat object.. 4 types ..

//1 Object literal represenation
let obj = { name: "ani", age: 24 };
// console.log(obj);

//2 Using constructor function
function vehical(name) {
  this.name = name;
}
let car = new vehical("hondai");
let car2 = new vehical("tata");

// console.log(car);
// console.log(car2);

//3 Using class as constructor function
class human {}
const h1 = new human("name");
// console.log(h1);

class human2 {
  constructor(name) {
    // default constructor is being called
    this.name = name;
  }
}
const h2 = new human2("ani");
// console.log(h2);

// using super & extend constructor.. also called inheratence.. like parent child relation
class animal {}
class Humann extends animal {
  constructor(name) {
    super(); // super keyword calls the parent class constructor and creates the parent object and store in memory
    this.name = name;
  }
}
let a1 = new Humann("jhon");
// console.log(a1);

//4 Using object.create()
// it is used to creat obj from existing obj
// let grandParent = {
//   name: "jhon",
// };
// let parent = Object.create(grandParent);
// console.log(parent);

// modification
let grandParent = {
  name: "jhon",
};
let parent = Object.create(grandParent);
parent.age = 44;
let child = Object.create(parent);
// console.log(child);

// one more method is there
let x = new Object();
x.age = 22;
// console.log(x);

// problem solution
// Creat simple animal hirarkey using classes
// property and method
// creat human classes

// method 1
// class animal1 {
//   constructor(name) {
//     this.name = name;
//   }
//   createAnimal() {
//     this.animal = `Name of animal is ${this.name}`;
//     return this.animal;
//   }
// }
// let anim = new animal1("Human");
// console.log(anim.createAnimal());

// class genus extends animal1 {
//   constructor(legs, tail, food, habitat) {
//     super();
//     this.legs = legs;
//     this.tail = tail;
//     this.food = food;
//     this.habitat = habitat;
//   }
//   createGenus() {
//     this.genus = `Human ${this.legs} legs and ${this.tail} tail, ${this.food} food and ${this.habitat} habitat`;
//     return this.genus;
//   }
// }
// let gen = new genus(2, "no", "meat and greens", "civilized", "Homo");
// console.log(gen.createGenus());

// class species extends genus {
//   constructor(species) {
//     super();
//     this.name;
//     this.species = species;
//   }
//   createSpecies() {
//     this.spe = `${this.name} having ${this.species}`;
//     return this.spe;
//   }
// }

// let spe = new species("H. sapiens");
// console.log(spe.createSpecies());

// Method 2
class animal1 {
  constructor(name) {
    this.name = name;
  }
}

class genus extends animal1 {
  constructor(name, legs, tail, food, habitat) {
    super();
    this.name = name;
    this.legs = legs;
    this.tail = tail;
    this.food = food;
    this.habitat = habitat;
  }
}

class species extends genus {
  constructor(name, legs, tail, food, habitat, genus, species) {
    super();
    this.name = name;
    this.legs = legs;
    this.tail = tail;
    this.food = food;
    this.habitat = habitat;
    this.genus = genus;
    this.species = species;
  }
}

let spe = new species(
  "Human",
  2,
  "no",
  "meat and greens",
  "civilized",
  "Homo",
  "H. sapiens"
);
console.log(spe);

//.
//'
function Human(name) {
  this.name = name;
}
let h11 = new Human("jhon");

h11.getName = function () {
  return this.name;
};

// let h2 = new Human("joe");
// console.log(h2);
