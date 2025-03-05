console.log("Hi Developers!!!!");
//alert(3+3) // it will run on browser but on node it will throw an error.
/** Data Types in JS
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Objects
 * 5. Bigint
 * 6. Null :-> standalone value type of null is : Object.
 * 7. Undefined
 * 8. Symbol
 

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

let value = 3
let negValue = -value
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

