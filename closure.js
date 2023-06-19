// option 1
function foo() {
  let a = 5;
  let b = 7;
  return function () {
    console.log(a, b);
  };
}
let x = foo();
x();

// option 2
function foo1() {
  let a = 5;
  let b = 7;
  return function () {
    console.log(a, b);
  };
}
foo1()();
