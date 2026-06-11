// promises
// async await

// promises - ek kam jake kro
// pending state
// hojayegaa - resolved
// nhi hogaa - reject

// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 3000);
// });

// prm
//   .then(function () {
//     console.log("Heyeyeyey");
//   })
//   .catch(function () {
//     console.log("Rejected");
//   });

// fetch se kisi bhi ur p jaa skte h, fetch ka data readable nhi hota, use json bnake readable krte h
// is k bad jo data milta h bo readable hota h

// fetch(`https://randomuser.me/api/`)
//   .then(function (notReadableData) {
//     return notReadableData.json();
//   })
//   .then(function (asliData) {
//     console.log(asliData.results[0].name.first);
//   });

// fetch(`https://randomuser.me/api/`)
//   .then((raw) => raw.json())
//   .then((data) => {
//     console.log(data.results[0].name.first);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await = work on promise

// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// .then se bchne k liye await use krte h

// async function abcd() {
//  let raw =  await fetch(`https://randomuser.me/api/`);
//  let data = raw.json();
//  console.log(data);
// }

// abcd();

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10);
//       if (num < 5) {
//         resolve(true);
//       } else {
//         reject(false);
//       }
//     }, 3000);
//   });
// }

// async function abcd() {
//   let v = await getNum();
//   console.log(v);
// }

// abcd();

//                                   day 62

// error handling

//eror  types = runtime,logical,syntax

// syntax error -> code m likhte time glti
//leh a =12;

// runtime error
// function abcd() {
//   let a = 99;
//   console.log(a.name.first);
// }

// abcd();

// logical error

// wrong logic
// function add(a, b) {
//   return a - b;
// }

// console.log(add(3, 1));

//error objects - message,name,stack

// try {
//   let a = 12;
//   console.log(a.age.name);
// } catch (err) {
//   console.error(err);
// }

// console.log("huiii");

// message, name,stack

// try{
//   let a= 88;
//   console.log(a.name.first);

// }
// catch(err){
//   console.log(err.stack)

// }

//try-catch

// try {
//   let a = 99;
//   console.log(a);
// } catch (err) {
//   console.log(err);
// }
// finally{
//   console.log("finallyyyy")
// }

//thorw errors

//throw new Error("Something went wrong");

// try {
//   let a = 99;
//   console.log(a.name.first);
// } catch (err) {
//   throw new Error("something went wrong");
// }

// error handling




