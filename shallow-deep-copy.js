// Shallow -Copy

// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

// example
// let x={"a":1,"b":2};
// let y=x;  //It makes a copy of the reference to x into y

// So, the addresses of x and y will be the same i.e. they will be pointing to the same memory location.
// so if you do this
// y.a=9;
// and now when you print y on the screen
// console.log(y) // it prints {"a":9,"b":2};
// but the interesting fact here is ,when you print x
// console.log(x)  // it also prints {"a":9,"b":2};

// So Now how to change this scenario??.The solution is deep copy

// Deep copy

// A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

// in lehman terms you create a variable y allocate it a different memory location ,copy all the members of x,assign the copied members to y

// the most easiest way to do is by stringifying the object
// let y=JSON.parse(JSON.stringify(x))
// now if we do
// y.a=9

// and print y
// console.log(y) // it prints {"a":9,"b":2};

// and if we print x
// console.log(x) //  it prints {"a":1,"b":2};

// // Object freeze to avoid math changes
// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);

//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
