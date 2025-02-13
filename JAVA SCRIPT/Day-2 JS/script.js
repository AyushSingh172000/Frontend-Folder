// var user = "Ram";
// console.log(`Good Morning ${user}`);

// var a="Hii"
// var b= Symbol(a)
// console.log(b)
// console.log(a==b) // false
// console.log(a==b.description)  


// console.log(typeof(b))
// console.log(typeof b.description)

// const sum = (a,b)=>a+b;
// const customSum=Symbol(sum)
// console.log(customSum);
// console.log(customSum.description)
// const fun=Function(customSum.description)
// console.log(fun)

var s1 = Symbol("Hiiii");
var s2 = Symbol("Hiiii");

console.log(s1);
console.log(s2);

console.log(s1==s2); //false

console.log(typeof s1); //symbol
