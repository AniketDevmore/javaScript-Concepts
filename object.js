// let obj = {
//   name: "ani",
//   surname: "dev",
//   age: 24,
//   city: "Ichalkaranji",
// };

// console.log(Object.values(obj)); // It return an array of all values of object literal
// // ans ['ani', 'dev', 24, 'Ichalkaranji']

// console.log(Object.keys(obj)); // it gives all keys of object
// // ans ['name', 'surname', 'age', 'city']

// console.log(Object.entries(obj)); // array of 2D array with key and value.
// 0: ['name', 'ani']
// 1: ['surname', 'dev']
// 2: ['age', 24]
// 3: ['city', 'Ichalkaranji']

// let a = { name: "aniket" };
// let x = a;
// x.name = "ani";
// console.log(a);
// console.log(x);

// let y = [1, 2, 3, 4, 5, 6, 7];
// let j = y; // shallow copy
// j.push(99);
// console.log(y);
// console.log(j);

// let v = { name: "aniket", age: 24, address: { city: "kolapur" } };
// let h = {};
// Object.assign(h, v);
// h.name = "ani";
// h.address.city = "pune";
// console.log("v", v);
// console.log("h", h);

// shallow copy
let x = { a: 1, b: 2 };
let y = x;
y.a = 9;
console.log("with shallow copy", x, y);

// deep copy
let p = { a: 1, b: 2 };
let q = JSON.parse(JSON.stringify(p));
p.a = 9;
console.log("with deep cpy", p, q);
