// class practice

// async function returns a message
//   You have to convert this callback to promise and then the promise into async await

function CheckStringIsPallindrome(str, cb) {
  setTimeout(() => {
    let strRrv = str.split("").reverse().join("");
    if (strRrv == str) {
      cb(null, "Pallindorme");
    } else {
      cb(new Error("No"), null);
    }
  }, 1000);
}

// CheckStringIsPallindrome("arora", function (err, result) {
//   console.log(err, result);
// });

function CheckStringIsPallindromePromise(str) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      let strRrv = str.split("").reverse().join("");
      if (strRrv == str) {
        res("Pallindrome");
        // cb(null,"Pallindorme")
      } else {
        // cb(new Error("No"),null)
        rej("Not Pallindrome");
      }
    }, 1000);
  });
}

// Convert above code into promise and then to async await

/*
  CheckStringIsPallindromePromise("arora").then(function(data){
    console.log(data);
  }).catch(err=>{
    console.log(err);
  })
  */

// async function returns a promise
async function Check() {
  try {
    let result = await CheckStringIsPallindromePromise("arora1");

    //console.log(result);

    return result;
  } catch (err) {
    // console.log("error", err);
    return err;
  }
}
let d = Check();

// console.log(d);
//Async function returns a promise

d.then((Data) => console.log(Data)).catch((err) => console.log(err));

// async function g() {
//   let y = await d;
// }

/*
  function sum(){
    return 2+2
  }
  
  let f=sum();
  
  console.log(f);
  */

// const foo = () => {
//   try {
//     throw new Error("error");
//   } catch (error) {
//     return error;
//   } finally {
//     return 42;
//   }
// };
// console.log(foo());
