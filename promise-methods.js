// const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
// const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
// const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

// let promise_1 = BULBASAUR_POKEMONS_URL;
// let promise_2 = RATICATE_POKEMONS_URL;
// let promise_3 = KAKUNA_POKEMONS_URL;

// // Promise.all()
// Promise.all([promise_1, promise_2, promise_3])
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log("An Error Occured");
//   });

// // Promise.any()
// Promise.any([promise_1, promise_2, promise_3])
//   .then((result) => {
//     console.log(JSON.parse(result));
//   })
//   .catch((error) => {
//     console.log("An Error Occured");
//   });

// // Promise.allSettled()
// Promise.allSettled([promise_1, promise_2, promise_3])
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log("There is an Error!");
//   });

// // Promise.race()
// Promise.race([promise_1, promise_2, promise_3])
//   .then((result) => {
//     console.log(JSON.parse(result));
//   })
//   .catch((error) => {
//     console.log("An Error Occured");
//   });

// let value = "aniket";
// // Promise.resolve()
// let promise = new Promise((resolve) => resolve(value));
// console.log(promise);

// // Promise.reject()
// let error = 1;
// let promise1 = new Promise((resolve, reject) => reject(error));
// console.log(promise1);

// Class teaching
// const pro=new Promise(function(res,rej){
//   //
// })

// const pr1 = Promise.resolve("All good");
// const pr1 = Promise.reject("All not good");

// pr1.catch(function (err) {
//   console.log(err);
// });
