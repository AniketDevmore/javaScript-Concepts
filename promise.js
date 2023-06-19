// Promises --->
// You create a promise by calling up a promise contructor
function ComparePromise(obj1, obj2) {
  const comparpromise = new Promise(function (res, rej) {
    setTimeout(() => {
      let str1 = JSON.stringify(obj1);
      let str2 = JSON.stringify(obj2);

      if (str1 == str2) {
        res("They are equal");
        // cb(null,"they are equal")
      } else {
        rej("Not equal");
        //cb(new Error("Not equal"),null)
      }
    }, 1000);
  });

  return comparpromise;
}

// // You have to utilize tomorrow --

// ComparePromise({ name: "Shubham" }, { name: "Shubham" })
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// ComparePromise({ name: "Shubham" }, { name: "Shubham" })
//   .then(function (data) {
//     console.log("Data", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// // do array search question with promises

function ComparePromisearr(arr, val) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          res("Number found");
        }
      }
      rej("Number not found");
    }, 1000);
  });
}

// ComparePromisearr([1, 2, 3, 4, 5], 4)
//   .then(function (data) {
//     console.log("Data", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// ComparePromisearr([1, 2, 3, 4, 5], 8)
//   .then(function (data) {
//     console.log("Data", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

let arr = [12, 3, 4, 8, 99, 15];

function FilterAsyncPromise(num) {
  const pr = new Promise(function (res, rej) {
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
          res("Number found");
          // return true;
          // return  cb(null,"Number found")
        }
      }
      rej("Number not found");

      //cb(new Error(),"Number not found")

      //  return false;
    }, 1000);
  });
  return pr;
}

// FilterAsyncPromise(8)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// FilterAsyncPromise(811)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log("err", err);
//   });

let string = "Aniket";
function compare(str) {
  let pro = new Promise(function (res, rej) {
    setTimeout(() => {
      for (let i = 0; i < string.length; i++) {
        if (string[i] == str) {
          // console.log("true");
          res("Available");
        }
      }
      // console.log("false");
      rej("Not available");
    }, 1000);
  });
  return pro;
}
// compare("n")
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

function addEven(num) {
  let pro = new Promise((res, rej) => {
    setTimeout(() => {
      if (num % 2 == 0) {
        res("Number is even");
      }
      rej("Number is odd");
    }, 2000);
  });
  return pro;
}
// addEven(13623968623486)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
      // setTimeout(() => {
      //   console.log("resolved");
      // }, 2000);
    })
  );
});
