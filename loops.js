// let i = 0;
// while (i < 10) {
//     console.log(i);
//     console.log("\n");
//     i++
// }

// // program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }

//const num = 10;
function primeNumber(num) {
  let isPrime = true;

  if (num === 1) {
    console.log(num + " is neither prime nor composite number!");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num + " is prime number!");
    } else {
      console.log(num + " is not prime number!");
    }
  } else {
    //num < 1
    console.log(num + "is not prime number!");
  }
}

for (let num = 1; num <= 10; num++) {
  primeNumber(num);
}

// just to understand
// function foo(num) {
//   let isDivi = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isDivi = false;
//       break;
//     }
//   }
//   console.log(isDivi);
// }
// foo(3);
