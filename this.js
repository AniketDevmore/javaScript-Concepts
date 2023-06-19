// function Human(name) {
//   this.name = name;
// }
// const ani = new Human("Ani");
// console.log(ani);

// show global / window object
var a = 88;
function foo() {
  var a = 7;
  console.log(this.a);
  function fg() {
    console.log(this.a);
  }
  fg();
}
foo();

let obj = {
  name: "ani",
  age: 22,
  address: {
    gh: function () {
      console.log(this);
    },
    pin: 416115,
  },
  foo: function () {
    console.log("value of ", this);
  },
  abc: () => console.log(this),
};

// obj.address.gh();
obj.foo();
obj.abc();

// Rules
// 1- if we have es5 fun then value of this is window object or the obj to which function is attached.

// 2- in case of arrow function n.

// Defination
// the value of this keyword inside function is  geneally
//depends on where  the function is being called
// and it
//will have two values
//1- global object or window object
// 2- if the function is part of any object then the value of this will point to that  object
