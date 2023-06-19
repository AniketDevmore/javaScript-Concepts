// // these are fun prototype methods
// Array.prototype.data = function () {
//   console.log(9);
// };
// let y = [1, 2, 3, 4, 5];
// y.data();

// // bind method
// function foo() {
//   console.log(this);
// }
// foo();

// // bind binds function to an obj which passed as argument
// // bind method return new fun which is new obj
// // or the obj we pass as argument
// let obj = {
//   name: "Ani",
//   age: 22,
//   city: "ich",
// };

// let bindedToObj = foo.bind(obj);
// bindedToObj();

// let obj2 = {
//   id: 224123,
// };

// let bindedToObj2 = foo.bind(obj2);
// bindedToObj2();

// // call method
// // it diectly calls fun with new val dont return
// function foo() {
//   console.log(this);
// }
// // foo();
// let obj = {
//   name: "Ani",
//   age: 22,
//   city: "ich",
// };
// let obj2 = {
//   id: 224123,
// };
// foo.call(obj);
// foo.call(obj2);

// // apply method
// // apply also do same job
// function foo() {
//   console.log(this);
// }
// // foo();
// let obj = {
//   name: "Ani",
//   age: 22,
//   city: "ich",
// };
// let obj2 = {
//   id: 224123,
// };
// foo.apply(obj);
// foo.apply(obj2);

// // diff in call and apply
function sum(p, q) {
  console.log((this.a + this.b) * p * q);
}

let k = {
  a: 7,
  b: 8,
};
sum.call(k, 4, 5);
sum.apply(k, [4, 5]); // this is valid
// It take only array

sum.apply(k, 4, 5); // this throw error
