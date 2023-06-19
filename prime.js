// function primeNumber(num) {
//   let isPrime = true;

//   if (num === 1) {
//     console.log(num + " is not a prime!");
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(num + " is prime number!");
//     } else {
//       console.log(num + " is not prime number!");
//     }
//   } else {
//     //num < 1
//     console.log(num + "is not prime number!");
//   }
// }

// for (let num = 1; num <= 10; num++) {
//   primeNumber(num);
// }
// primeNumber(num);

// function reverse(x) {
//   let palindrome = x.toString().split("").reverse().join("");
//   if (x === Number(palindrome)) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not palindrome");
//   }
// }
// reverse(767);

// function foo(b) {
//   var rev = 0,
//     remainder;

//   while (b > 0) {
//     remainder = b % 10;
//     rev = rev * 10 + remainder;
//     b = Math.floor(b / 10);
//   }
//   return rev;
// }
// console.log(foo(123));

// function reverse(num) {
//   let rev = 0;
//   while (num > 0) {
//     let f1 = num % 10;
//     num = Math.floor(num / 10);
//     rev = rev * 10 + f1;
//   }
//   return rev;
// }
// let red = reverse(123456);
// console.log(red);
