let htmlElement = document.getElementById("para");
htmlElement.style.color = "red";

let buttonElement = document.getElementById("btn");
buttonElement.addEventListener("click", function () {
  //let htmlelement = document.getElementById("para");
  htmlElement.style.color = "green";
});

let buttonelement = document.getElementById("btn2");
buttonelement.addEventListener("click", function () {
  //let element = document.getElementById("para");
  htmlElement.style.fontFamily = "verdana";
});
