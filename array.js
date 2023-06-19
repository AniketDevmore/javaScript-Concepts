// // // forEach function
// // Here we have to make an array
// let doubleArray = [];
// let gg = [1, 2, 3, 4, 5, 6];
// gg.forEach(function (ele) {
//   doubleArray.push(ele * 2);
// });
// console.log(doubleArray);

// // map function
// // by default it return array
// let ret = gg.map(function (ele, i) {
//   return 2 * ele;
// });
// console.log("From map function", ret);

// let abc = ["a", "b", "c", "d", "e"];
// let capital = abc.map(function (ele) {
//   return ele.toUpperCase();
// });
// console.log("From map function", capital);

// let newArr = [];
// let arr = [1, 2, 3, 4, 54, 78, 89, 88];
// arr.forEach(function (ele) {
//   if (ele % 2 === 0) {
//     newArr.push(ele);
//   }
// });
// console.log(newArr);

// // map function ensures that length of input array is equals to parent
// let div = arr.map(function (ele) {
//   if (ele % 2 === 0) {
//     return ele;
//   }
// });
// console.log(div);

// // because of map default behevaiour we use filter
// let div1 = arr.filter(function (ele) {
//   if (ele % 2 === 0) {
//     return ele;
//   }
// });
// console.log(div1);

// let div2 = arr.filter(function (ele) {
//   return ele % 2 === 0;
// });
// console.log("a", div2);

// you have to filter out all the elemenst form array that starts with a

// let str = ["abc", "bnn", "aqua", "allahabad", "hjj"];
// let fl = str.filter(function (ele) {
//   return ele.endsWith("a");
// });
// console.log(fl);

// //Question 1
// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = arr[i] + sum;
// }
// console.log(sum);

// let add = arr.reduce(function (sum, ele) {
//   return (sum = sum + ele);
// }, 0);
// console.log(add);

// let div = arr.reduce(function (even, ele) {
//   if (ele % 2 == 0) {
//     even.push(ele);
//   }
//   return even;
// }, []);
// console.log(div);

// Question 2
// let array = ["HELLO", "World", "tata", "dodo", "yyyuu"];
// let ab;
// let join = array.forEach(function (ele) {
//   ab = array.join("");
//   return ab;
// });
// console.log("by forEach", ab);

// let join1 = array.reduce(function (conn, ele) {
//   ab = array.join("");
//   return ab;
// }, "");
// console.log("by reduce", join1);

// Slice and Splice
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice(0, 2));
// console.log(arr);

// //let array = ["p", "q", 1, 1, 2];
// function rotate(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       let s1 = arr.slice(0, i);
//       let s2 = arr.slice(i, i + 1);
//       let s3 = arr.slice(i + 1, arr.length);

//       return [...s2, ...s1, ...s3];
//     }
//   }
// }

// console.log(rotate(["p", "q", 1, 1, 2], "q"));

// //
// //
// console.log(array);
// let arrk = [1, 2, 43, "q", "rs", "t"];
// // let abc = arrk.splice(3, 3);
// // let xyz = [...arrk, ...abc];
// // console.log(abc);
// // ["q","rs","t",1,2,43]
// function rotateWithSplice(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (value == arr[i]) {
//       let firstHalf = arr.splice(0, i);
//       return [...arr, ...firstHalf];
//     }
//   }
// }
// console.log(rotateWithSplice(arrk, "q"));

// //question
// let ar = [1, 2, 3, 4];
// let ar2 = [5, 6, 7, 8];
// console.log(ar.concat(ar2));

// console.log(ar2.pop());
// console.log(ar2.push(8));
// console.log(ar2);

// console.log(ar.shift());
// console.log(ar.unshift(1));
// console.log(ar);

// console.log(ar.indexOf(4));

// let a = "ani";
// let b = "ket";
// let s = " ";
// let f = "dev";
// let g = "more";
// let c = a.concat(b, s, f, g);
// console.log(c);

// The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// // const ratings = [];
// // watchList.map(function (){

// // })
// // for (let i = 0; i < watchList.length; i++) {
// //   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// // }
// const ratings = watchList.map(function (ele) {
//   return { title: ele.Title, ratings: ele.imdbRating };
// });
// // Only change code above this line

// console.log(JSON.stringify(ratings));
