
/// Write a function that calculates product of two numbers ( 2*2  )
// Write  a function that calculates the cube of a number
//Write  a function that calculates the square  of a number


function calculation(num1,num2) {

var product = num1 * num2;
console.log(product);
var cube = num1 * num1 * num1;
console.log(cube);
var square = num2 * num2;
console.log(square);

}
calculation(2,7);


// Write a function that prints fizz if the number you pass is divisible by 3 ,
// it prints buzz if the number you pass is divisble by 5
// if the number is divisble by both 3 and 5 print fizzbuz 
//   %
//console.log(4%2==0);


function fizzBuzz (n) {
    if (n % 3 === 0 && n % 5 === 0){
        console.log("fizzBuzz");
    } else if (n % 3 === 0) {
        console.log("fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    }
}
fizzBuzz(15);


