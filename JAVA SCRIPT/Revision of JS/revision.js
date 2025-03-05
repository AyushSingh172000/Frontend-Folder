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

