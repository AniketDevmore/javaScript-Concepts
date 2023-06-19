/* function addition(l1, l2) {
  l1 = l1.reverse().join('');
  l2 = l2.reverse().join('');

  let sum = Number(l1) + Number(l2);
  sum = sum.toString().split('').reverse().join('');
  sum = Number(sum);

  sum = String(sum).split('').map((num) => {
    return Number(num)
  });
  console.log(l1, l2);
  console.log(sum);
}

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
addition(l1, l2);
 */

// function addition(l1, l2) {
//   let num1 = l1.reverse().join("");
//   let num2 = l2.reverse().join("");

//   let sum = Number(num1) + Number(num2);

//   let output = [];
//   while (sum > 0) {
//     let f1 = sum % 10;
//     output.push(f1);
//     sum = Math.floor(sum / 10);
//   }
//   console.log(output);
// }
// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];
// addition(l1, l2);
