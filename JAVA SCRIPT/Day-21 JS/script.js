// let obj={
//     name:"SRK",
//     greet: function(){
//         console.log(this);
//         function inner(){
//             console.log(this);
            
//         }
//         inner()
//     }
// }
// obj.greet()

// call, apply and bind methods

// function sum(a,b){

//     return(a+b);
// }
// console.log(sum);

const obj={
    name: "Ayush",
    age: 26
}
function details(city,pin){
    console.log("UserName: ",this.name);
    console.log("UserAge: ",this.age);
    console.log("City: ",city);
    console.log("Pincode: ",pin);
    
}
//details.call(obj,"Noida",201301);
details.apply(obj,["Noida",201301]);