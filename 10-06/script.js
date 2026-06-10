// class expression,hoisting,inhetitence,getter& setter

// let Animal = class  {
//   // variable ka name hi class ka name hota h
//   constructor() {
//     this.name = "Dodo";
//     this.breed = "Dog";
//   }
// };

// let a1 = new Animal();

// hoisting not possible

// class Animal {
//   constructor() {
//     this.hands = 2;
//     this.legs = 2;
//     this.breed = "dog";
//   }

//   eat() {}
//   breathe() {}
// }

// class Kekda extends Animal {
//   constructor() {
//     super();
//     this.legs = 8;
//     this.hands = 0;
//   }

//   susu() {}
// }

// let k1 = new Kekda();

// inheritance = agr koi class h usme kuchh likha h adn aap mante ho ek new class usi ka extension h to aap wo sabhi features purani clss ka use kr skte h

// class Animal {
//   constructor() {
//     this._age = 12;
//   }

//   get age(val){
//     if(val<0){
//       console.error("not");
//       return ;
//     }
//     this._age = val;
//     return this._age;

//   }

//   set age(){
//     return this._age;

//   }
// }

// let a1 = new Animal();
// console.log(a1.age);

// questions

// let user = {
//   name: "Arun",
//   email: "arun@gmail.com",
//   login: () => {
//     console.log("Loggedin");
//   },
// };

// user.login();

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;

//   }

//   loggedIn(){
//     console.log("Heyyy");
//   }
// }

// let u1 = new User("Arun","h@gmail.com");

// let product = {
//   name: "cap",
//   price: 3300,
//   discountedPrice: function () {
//     return this.price - 200;
//   },
// };

// console.log(product.discountedPrice());

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   drive() {
//     return this.brand + "-" + this.speed;
//   }
// }

// let car1 = new Car("Honda", 180);
// let car2 = new Car("Maruti",170);

// class Student {
//   constructor(name, roll) {
//     this.name = name;
//     this.roll = roll;
//   }
//   introduce() {
//     return this.name + "-" + this.roll;
//   }
// }

// let s1 = new Student("Arun", 222224);

// bina class k bhi constructor fnc bnta h

// function User() {
//   this.name = "Arun";
// }
// let a1 = new User();

// call,apply,bind

// function abcd() {
//   console.log(this.name);
// }

// let obj = {
//   name: "Arun",
// };

// abcd.call(obj);

//                    day 59

// asynchrony in js
// callbacks, and promises in callbacks
// promises - `pending`, resolved , rejected
// prevent callback hell using async and await
// setinterval and settimeout in js

// jb lng single threaded h - ek kam ek bar m kr payegii
// synchronous approach
// asynchronous approach -

// callbacks => ek fnc jo turant nhi chlegaa , jb koi kaam complete hogaa
// fnc m pass kete h

// getDataFromInstagram("arunkumar27", function () {
//   console.log("Heyyy");
// });

// setTimeout(() => {
//   console.log("Hey")
// }, 2000);

// function abcd(fn) {
//   fn();
// }

// abcd(function () {
//   console.log("Heyyy");
// });

// promises =>

// function a(fn) {
//   fn();
// }

// a(function () {
//   console.log("Heyy");
// });

// situation = github se repo data lana

// day 60

// exercise 1

// cb = ek fnc hota h , jo turant nhi chlta h , kuchh kam hone p

// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }

// afterDelay(3000, function () {
//   console.log("Cb executed...");
// });

// function getUser(username, cb) {
//   setTimeout(() => {
//     cb({ id: 1, username: "Arun" });
//   }, 1000);
// }

// function getUserPosts(id, cb) {
//   setTimeout(() => {
//     cb(["hello", "world"]);
//   }, 2000);
// }

// getUser("Arun", function (data) {
//   getUserPosts(data.id, function (allposts) {
//     console.log(data.username, allposts);
//   });
// });


// then - catch


