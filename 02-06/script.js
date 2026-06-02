// createElement
// append a child

// let h1 = document.createElement("h1");

// console.log(h1);

// var btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   // console.log("Clicked");
//   var h1 = document.createElement("h1");
//   h1.innerHTML = 'Hello from js';
//   console.log(h1);
// });

// var body = document.querySelector('body');
// body.appendChild(h1);

// var btn = document.createElement("h2");
// btn.innerHTML = "download";
// var body = document.querySelector("body");
// body.appendChild(btn);

// var main = document.querySelector("main");
// var div = document.createElement("div");

// div.style.height = "100px";
// div.style.width = "100px";
// div.style.backgroundColor = "red";

// main.appendChild(div);

//                                day 45

// settimeout => for delaying
// sync = single task by nature ja is sync
// async = multiple task

// setTimeout(() => {
//   console.log("Arun Kumar");
// }, 4000); // time in milliseconds

// var h1 = document.querySelector("h1");
// var btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   // console.log("Hello");
//   //h1.innerHTML = "Hello word";

//   setTimeout(() => {
//     h1.innerHTML = "Shyam lal college";
//   }, 2000);
// });

// setinterval => ek particular interval k bad , controlled loop

// setInterval(() => {
//   console.log("Hello guys");
// }, 1000);

// var a = 0;
// var int = setInterval(() => {
//   a++;
//   console.log(a);
// }, 50);

// setTimeout(() => {
//   clearInterval(int);
// }, 5000);

// clearInterval

var grow = 0;

var btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let int = setInterval(() => {
    grow++;
    h2.innerHTML = `grow%`;
    inner.style.width = grow + "%";
  }, 500);

  setTimeout(() => {
    clearInterval(int);
    btn.style.opacity = 0.5;
    btn.style.pointerEvents = "none";
  }, 5000);
});
