// weather dashboard with error handling

// var url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

// async function getWeather(city) {
//  await fetch(`url`)
//     .then((raw) => raw.json())
//     .then((result) => {
//       console.log(result);
//     });
// }

// scenerio : 2

//ek array hoga of user emails , send bulk emails, fnc k parameter m jo mail h us p mail jayegaa

// const users = [
//   "user1@example.com",
//   "user2@example.com",
//   "user3@example.com",
//   "user4@example.com",
//   "user5@example.com"
// ];

// function sendEmail(email){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       let time = Math.floor(Math.random()*5);
//     }, time*1000);
//   })
// }

//  lecture : 64

// throatling and debouncing

// debouncing - google searching in input element
// stop krne p result dikhta h

// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(fn, delay);
//   };
// }

// document.querySelector("#search").addEventListener(
//   "input",
//   debounce(function () {
//     console.log("Chala");
//   }, 400),
// );

// throatling - continues nd after 2 second do some tasks

// window.addEventListener('mousemove',function(e){
//   console.log(e.clientX,e.clientY)
// })

// function throttle(fn, delay) {
//   let last = 0;
//   return function () {
//     const now = Date.now();
//     if (now - last >= delay) {
//       last = now;
//       fn();
//     }
//   };
// }

// window.addEventListener(
//   "mousemove",
//   throttle(function () {
//     console.log("Arun");
//   }, 2000),
// );


//json parse - 
// json stringfy

console.log(JSON.stringify({name:'Arun'}))
