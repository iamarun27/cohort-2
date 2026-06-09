// advance js
// oops, classes,objects,constructors,prototypes,this keywod, call, apply,bind

//jb code chhota hota h, kuchh bhi kr skte h , jb code bda hota h tb ati h guidelines

// oops => code ko objects,classes,functions

// modular,scalable,managable,promises,easy to fix,reuse

// let obj = {
//   name: "Arun",
//   age: 20,
// };

// classes => blueprint, saancha h
// constructor => automatic chlne bala function

// class Remote {
//   constructor(product, price, color) {
//     this.prooduct = product;
//     this.price = price;
//     this.color = color;
//   }

//   powerOn() {
//     console.log("On");
//   }
//   powerOff() {
//     console.log("Off");
//   }
// }

// let remote1 = new Remote("lenove", 2300, "red");
// let remote2 = new Remote("daikin", 2500, "blue");

// new means blank object

// class BiscuitMaker {
//   constructor() {
//     this.name = "ParleG";
//     this.price = 5;
//   }
// }

// let biscuit = new BiscuitMaker();

// classes hm bnate h so that new object mile, classes object ki factory hoti h , har bar new word k sath run krne p new object milegaa

// this ek esa variable h , chlte time decide hoti h

// constructor => ek fnc jo automatic chlta h jaisi hi class se nya instance bnya jata h

// prototypes :

// class Human {
//   constructor() {
//     this.name = "Arun";
//     this.age = 20;
//   }
// }

// Human.prototype.sanslo = function () {
//   console.log("Heyyy");
// };

// Human.prototype.khanakhao = function () {
//   console.log("Heyyy");
// };

// prototype = shared memory

// let h1 = new Human();
// let h2 = new Human();

//                           day 57

// class Bottle {
//   constructor() {
//     this.color = "red";
//     this.price = 50;
//   }

//   fill() {}
//   drink() {}
// }

// let b1 = new Bottle();

// this ek special keyword hota h , isi value bdl jati h

// console.log(this)

// function add(){
//   console.log(this)
// }

// add();

//global -> window
// fnc = window
// es5 fnc insode object = object
// es6 fnc inside object = window
//es6 fnc inside es5 fnc = object

// call,apply,bind

//ek fnc m this ki vakue window hoti h, agr aap chahte ho, pr bo window n ho bt koi object ho

let obj = {
  name:"Arun",
}

function abcd(a,b,c) {
  console.log(this,a,b,c);
}

//abcd.call(obj);

//abcd.apply(obj,[1,2,3])

let newfnc = abcd.bind(obj,1,2,3);
newfnc();

// call = fnc chlata h and this ki value set krta h
// apply = whi rta h jo call krta h and arguments m phli value this ki and dusri value array hoti h
// bind = same as call and give new fnc




