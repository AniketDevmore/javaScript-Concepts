function AsynApiToCheckNumberISEven(num, cb) {
  // For producing the asynchronous behaviour i am gonna be using setTimeout
  // mimicing the async behaviour
  setTimeout(() => {
    if (num % 2 == 0) {
      cb(null, "its even");
    } else {
      cb(new Error("Its not even"), null);
    }
  }, 3000);
}

// The callback function where the first parameter is an error is known as error first callback function

// AsynApiToCheckNumberISEven(3, function (err, value) {
//   console.log(err, value);
// });

// AsynApiToCheckNumberISEven(3, function (err, value) {
//   if (err != null) {
//     // PErform sucess operatipon
//     console.log(err, value);
//   } else {
//     console.log("failure operations");
//   }
// });

// Task  here ---->
// You have to asynchronously search for a number in an array ,if the number exist just call the callback with error as null otherwise call the callback with error value

let arr = [1, 2, 3, 45, 47, 18, 9];
function searchNumber(num, ab) {
  setTimeout(() => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        return ab(null, "Number found");
      }
    }
    return ab(new Error("Number not found"), null);
  }, 1000);
}
// searchNumber(18, function (err, value) {
//   console.log(err, value);
// });
// searchNumber(99, function (err, value) {
//   console.log(err, value);
// });

// class solution ...only call once
let arr1 = [12, 3, 4, 8, 99, 15];

function FilterAsync(num, cb) {
  setTimeout(() => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == num) {
        // return true;
        return cb(null, "Number found");
      }
    }
    //  return false;
    return cb(new Error(), "Number not found");
  }, 1000);
}

// FilterAsync(99, function (err, value) {
//   console.log(err, value);
// });

// You have two check two objects if the are equal or not ===
// {name:"shubham",city:"delhi"}
// {name:"shubham",city:"Delhi"}
// if they are equal you will give its successful otheriwse error

let obj1 = { name: "shubham", city: "delhi" };
let obj2 = { name: "shubham", city: "delhi" };

function Compare(obj1, obj2, cb) {
  setTimeout(() => {
    let str1 = JSON.stringify(obj1);
    let str2 = JSON.stringify(obj2);

    if (str1 == str2) {
      cb(null, "They are equal");
    } else {
      cb(new Error("Not equal"), null);
    }
  }, 1000);
}

// Compare({ name: "Shubham" }, { name: "Shubham" }, function (err, value) {
//   console.log(err, value);
// });

// Compare({ name: "Shubha" }, { name: "Shubham" }, function (err, value) {
//   console.log(err, value);
// });

let string = "Aniket";
function compare(str, ab) {
  setTimeout(() => {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == str) {
        // console.log("true");
        return ab(null, "Available");
      }
    }
    // console.log("false");
    return ab(new Error("Not available"), null);
  }, 1000);
}
// compare("n", function (err, value) {
//   console.log(err, value);
// });
