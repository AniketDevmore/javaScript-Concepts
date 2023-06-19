// var romanToInt = function (s) {
//   // Map to store romans numerals
//   const romanMap = new Map();
//   // Fill the map
//   romanMap.set("I", 1);
//   romanMap.set("V", 5);
//   romanMap.set("X", 10);
//   romanMap.set("L", 50);
//   romanMap.set("C", 100);
//   romanMap.set("D", 500);
//   romanMap.set("M", 1000);
//   // Length of the given string
//   const n = s.length;
//   // Variable to store result
//   let num = romanMap.get(s[n - 1]);
//   // Loop for each character from right to left
//   for (let i = n - 2; i >= 0; i--) {
//     // Check if the character at right of current character is
//     // bigger or smaller
//     if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
//       num += romanMap.get(s[i]);
//     } else {
//       num -= romanMap.get(s[i]);
//     }
//   }
//   return num;
// };

function romanToInt(str) {
  if (str == null) {
    return -1;
  }
  let num = characterToInt(str.charAt(0));
  let cur;
  let pre;
  for (let i = 1; i < str.length; i++) {
    cur = characterToInt(str.charAt(i));
    pre = characterToInt(str.charAt(i - 1));

    if (cur <= pre) {
      num += cur;
    } else {
      num = num - pre * 2 + cur;
    }
  }
  return num;
}

function characterToInt(xy) {
  switch (xy) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

console.log(romanToInt("III"));
console.log(romanToInt("S"));
console.log(romanToInt("L"));
console.log(romanToInt("VVI"));
