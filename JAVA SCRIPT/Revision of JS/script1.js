// WAJSP to find the square and cube of a given number? //
// const square = (num) => sqrt=(num*num)
// console.log(square(5));

// const cube = (num) => cubee =(num*num*num)
// console.log(cube(3));

// Reverse A Number //

// function Reverse(num){
//     let rev=0;
//     while (num>0) {
//         rev = rev*10+num%10;
//         num=Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(Reverse(12345));

//*************************************Iterators************************* */

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
//  While Loop
// let arr=["IronMan","Captain America","Thor","Thanos"]
// let i=0;
// while (i<arr.length) {
//     console.log(`Name is ${arr[i]}`);
//     i++;
// }

// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// Maps ** Important**

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State Of America")
// map.set('Fr', "France")
// map.set('Rs', "Russia")
// map.set('IN', "India")

//console.log(map); // for in loop not work on map 

// for (const key of map) {
//     console.log(key);
    // The whole output come in an array to remove this use destructuring
// }

// for (const [key, value] of map) {
//     console.log(key, ':->', value);
    
// }

// Output:-> IN :-> India 
// USA :-> United State Of America 
// Fr :-> France 
// Rs :-> Russia




// for in loop
// let object = {
//     JS : "JavaScript",
//     CPP : "C++",
//     RB : "Ruby",
//     Swift : "swift by apple"
// }

// for (const key in object) {
//     console.log(`${key} shortcut is for ${object[key]}`);
    
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

const coding = ["js", "rb", "py", "java", "cpp"]
// coding.forEach(function(val){
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
    
// })

