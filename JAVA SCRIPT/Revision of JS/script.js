// Object literals
// const User = {
//     name: "Ayush",
//     email: "ayush@gmail.com",
//     age: 18,
//     location: "Noida-18"
// }
// console.log(User.email);
// console.log(User["email"]); // to access the email.

// let obj1 = {name:"chombi",age:16}

// let obj2 = { }
// // new empty object


// for (prop in obj1) {
// obj2[prop] = obj1[prop]
// console.log(obj2)
// }
// //copy key-values into new object

// obj2.age=20;
// console.log(obj2);
// //{ name:"chombi",age:20 }
// console.log(obj1);
// //{ name:"chombi",age:16 }

// Functions//
let a=10;
let b=10;
var sum=0;
function Add(a,b) {
     sum = a+b;
     return sum;
}
Add(a,b)
console.log(`Sum of ${a} and ${b} is: ${sum}`);

