console.log("Hi Developers!!!!");
//alert(3+3) // it will run on browser but on node it will throw an error.
/** Data Types in JS
 * :-> Primitive Datatypes
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Bigint
 * 5. Null :-> standalone value type of null is : Object.
 * 6. Undefined
 * 7. Symbol
 
 :-> Non-Primitive Datatypes
    1. Objects
    2. Array
    3. Function

console.log(typeof null);       // Object
console.log(typeof undefined);  // undefined
*/

/********************************************** Type Conversion******************************************* 

let value= null             // it will give 0              //"33abc"           // Due to this it will throw NaN
console.log(typeof value);
console.log(typeof (value));

let valuein=Number(value)
console.log(typeof(valuein));
console.log(valuein);       // NaN

let loggedIn = 1
console.log(loggedIn);
let BooleanLoggedIn = Boolean(loggedIn)
console.log(BooleanLoggedIn);           // true

// 1:-> true 0:-> false ""-> false "ayush":-> true
*/


/********************************************Operations************************************************* */

// let value = 3
// let negValue = -value
//console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(3/2);
// console.log(3%2);

// let str1 = "hello"
// let str2 = "ayush"
// let str3 = str1+str2
// console.log(str3);

// let n = 10
// console.log(typeof n);      // number
// let m=10n
// console.log(typeof m);      // bigint

// let val = 123
// let str = String(val);
//let num = Number(val);
//console.log(num);
//console.log(str);

//console.log(typeof str);

//console.log(typeof num);

//console.log(typeof (5+"5"));

//console.log(10 + "20");

// let val = true
// let res = console.log(Number(val));

// let res = parseInt("100pxytm")
// console.log(typeof res);
// let res1 = String(res)
// console.log(res1);
// console.log(typeof res1);

//console.log(String (res));
//console.log(typeof res);

//console.log(Boolean(""));   // false

//console.log("5"-3);
//console.log("5"*3);
//console.log("5"+3);

//console.log("4"*"2");

// console.log(Number("123.45abc"));       // NaN
// console.log(parseFloat("123.45abc"));   // 123.45


//console.log(parseInt("3.14"));  // → 3 //(ignores decimals)
  
//console.log(Number("3.14"));    // → 3.14 //(full conversion)

//console.log("10" - "2")
//console.log([1,2,] + [,3,4])

//console.log(0 || "Hello")  // it will return first truthy value

//console.log(0 && "Hello") // it will return first falsy value

// console.log("start");
// let a = 10;
// var b = 20;
// const c = 30;
// {
//   let a = 100;
//   var b = 200;
//   const c = 300;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log("end");

// console.log("start");
// let a = 10;
// var b = 20;
// const c = 30;
// {
//   let a = 10;
//   console.log(a);
//   const c = 300;
//   console.log(b);
//   b = 200;
//   //c = 30;         it will throw an error because const keyword declared value never get change.
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// console.log("end");

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);  // false

/********************************************String************************************************* */

/*************************Replace()***************************** */

// const url = "https://ayush.com/ayush%20Singh"
// console.log(url);

// console.log(url.replace('%20','_'));

/*************************Trim()***************************** */

// let val = "                  Hello Ayush Singh                  ";
// console.log(val);

// console.log(val.trim());

/*************************Slice()***************************** */

// const str = "Hi buddy I am Developer!"
// const anotherStr = str.slice(10, 12)
// console.log(anotherStr);

/*************************Split()***************************** */

// const url = "https://ayush_com/ayush_Singh"
// console.log(url.split('_'));

/******************************************************Numbers**&**Maths*************************************************************/

// const Balance = new Number(100)
// console.log(Balance);

// const strBalance = Balance.toString();
// console.log(typeof strBalance);
// console.log(strBalance.length);

// const otherNumber = 123.4268

// console.log(otherNumber.toPrecision(5));

// const hundreds = 1000000000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

/*****************************************************************Maths************************************************************ */

//console.log(Math);
// console.log(Math.abs(-20));
// console.log(Math.round(5.6));
// console.log(Math.ceil(2.8));
// console.log(Math.floor(7.9));
//console.log(Math.max(4,8,7,6,5,2));
//console.log(Math.min(4,8,7,6,5,2));


// console.log(Math.random());      // It gives the random numbers btw 0-1
// console.log((Math.random()*10)+1);   // It shift the value on left side.
// console.log(Math.floor(Math.random()*10)+1); // It gives the random number btw 1-9

/*************************Important Line For Future******************************/
// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random()*(max-min+1))+min);

/***********************************************************Date()************************************************************* */

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myTimeStamp = Date.now()
//console.log(myTimeStamp/1000);
//console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());

/******************************************************Array************************************************************ */

// let arr1 = new Array(10,20,30,4,58,6,20)
// arr1.push(6)
// arr1.push(9)
// console.log(arr1);


// const arr2 = [10,2,5,"ayush","kalam", 45, 475, true]
// arr2.push(8)
// arr2.push("hey")
// arr2.unshift(9)
// console.log(arr2);
// console.log(arr2.includes(2));
// console.log(arr2.indexOf(5));

// const newArr = arr1.join()
// console.log(arr1);
// console.log(typeof newArr);
// console.log(newArr);

//const marvel_heros=["Ironman","Thor","CaptainAmerica"]
//const dc_heros=["Batman","flash","superman"]
// const newArr=marvel_heros.concat(dc_heros)
// console.log(newArr);

                            // Spread Operator/Method//
// const mergeArr=[...marvel_heros, ...dc_heros]
// console.log(mergeArr);

// console.log(Array.isArray("Ayush"));
// console.log(Array.from("Ayush"));

// let score1 = 100
// let score2 = 100
// let score3 = 100

// console.log(Array.of(score1, score2, score3));   It will converts multiple variable into a single array in one shot.

//const newArr = [10,30,25,78,40,50,32,48,75,15]

// newArr.filter((item,index)=>{
//     if (item>40 && index>2) {
//         return console.log(item + " : is greater than 40 and the index of the value is : "+index);
        
//     }
// })

// let arr = newArr.map(item => item*2)
// console.log(arr);                        // using for the single line statement.


// let revArr = newArr.reverse();
// console.log(revArr);

// let sortArr = newArr.sort();
// console.log(sortArr);


//let evenArr = 
// newArr.forEach((val)=>{
//     if (val%2===0) {
//         return console.log(val+" "+"is an even number.");  
//     }

// }
// );
// console.log(evenArr);

// newArr.map((item,index)=>{
//     if (item%2===0) {
//         return console.log("Even Numbers are "+item);
        
//     }
     
// })



/******************************************************Objects************************************************************ */

//Object it will work on key and value pair.

// const Obj1 = {
//     name: "Ayush",
//     email: "ayush@gmail.com",
//     phone: 6392301514,
//     age: 25,
//     location: "Varanasi",
//     company: "VSPL"
// }
// console.log(Obj1.name);
// console.log(Obj1.email);
// console.log(Obj1.phone);
// console.log(Obj1.age);
// console.log(Obj1.location);

// Obj1.age = 26
// console.log(Obj1.age);

// Obj1.greeting = function () {
//     console.log("Hello Developers What is up!!!!");
    
// }
// console.log(Obj1.greeting());
// Obj1.greeting2 = function () {
//     console.log(`Hello ${this.name} What is up!!!!`);
    
// }
// console.log(Obj1.greeting2());

// const demo = new Object()
// //console.log(demo);

// demo.id="121"
// demo.name="Kalash"
// demo.isLoggedIn= false
//console.log(demo);

// const regularUser ={
//     email: "ayush@gmail.com",
//     fullName:{
//         firstName:"Ayush",
//         lastName: "Singh"
//     }
// }

//console.log(regularUser.fullName);

//const combinedObject = {Obj1,Obj2}

// console.log(combinedObject);

// const combinedObject = Object.assign({}, Obj1, Obj2, regularUser.email, regularUser.fullName)
// console.log(combinedObject);


// const finalObject = {...Obj1, ...demo, ...regularUser}
// console.log(finalObject);


const course = {
    coursename: "js in english",
    price: "9999",
    courseInstructor: "ayush"
}

//console.log(course.courseInstructor);

const {courseInstructor: instructor}=course
console.log(instructor);

const {courseInstructor}=course
console.log(courseInstructor);

 