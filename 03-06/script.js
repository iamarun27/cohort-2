// 5 projects
// dom
// web dev course part 2  : 3 projects

// var img = document.querySelector("img");

// var love = document.querySelector("i");

// img.addEventListener("dblclick", () => {
//   console.log("Hello");
//   // love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

//   setTimeout(() => {
//     console.log("Timeout");
//   }, 3000);
// });

//  day 47

// var arr = [
//   { name: "Arun", age: 22, city: "Delhi" },
//   { name: "Rahul", age: 25, city: "Mumbai" },
//   { name: "Priya", age: 21, city: "Bengaluru" },
//   { name: "Amit", age: 28, city: "Pune" },
//   { name: "Sneha", age: 24, city: "Hyderabad" },
//   { name: "Vikas", age: 30, city: "Chandigarh" },
//   { name: "Neha", age: 23, city: "Jaipur" },
//   { name: "Rohit", age: 27, city: "Lucknow" },
//   { name: "Anjali", age: 20, city: "Kolkata" },
//   { name: "Karan", age: 26, city: "Ahmedabad" },
// ];

// var sum = 0;
// arr.forEach((elem) => {
//   // console.log(elem.name)
//   sum += elem.age;
// });
// console.log(sum);

// console.log(arr[0].name);

// var arr = [1, 2, 3, 4, 5];

// var sum = 0;

// arr.forEach((elem, idx) => {
//   // console.log(elem,idx);
//   // console.log("Hello");
//   sum += elem;
// });
// console.log(sum);

const users = [
  {
    fullName: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Software Engineer",
    description: "Experienced full-stack developer.js.",
    tags: ["JavaScript", "React", "Node.js", "Web Development"],
  },
  {
    fullName: "Emma Johnson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Graphic Designer",
    description: "Creative designer focused on branding.",
    tags: ["UI/UX", "Branding", "Figma", "Illustration"],
  },
  {
    fullName: "Michael Lee",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Data Scientist",
    description: "Passionate about machine learning.",
    tags: ["Python", "Machine Learning", "Data Analysis", "AI"],
  },
  {
    fullName: "Sophia Brown",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Content Writer",
    description: "Writes engaging blog posts.",
    tags: ["Writing", "SEO", "Content Marketing", "Research"],
  },
  {
    fullName: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    profession: "Photographer",
    description: "Professional photographer.",
    tags: ["Photography", "Editing", "Travel", "Portraits"],
  },
];

var sum = "";

users.forEach((elem) => {
  // console.log(elem)
  sum =
    sum +
    `<div class="card">
      <img src=${elem.image} alt="">
      <h3>${elem.fullName}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`;
});

// console.log(sum);

var main = document.querySelector("main");
main.innerHTML = sum;

// make an array of objects
// make a card in html
// users p lgao foreach
// make a variable sum and put it empty string
// add data in sum
// add on card in sum
//select parent main and put sum in inner html
