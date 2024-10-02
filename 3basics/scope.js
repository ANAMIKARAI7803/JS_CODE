// var c = 300   //global

// if (true){
//     let a = 10 
//     const b = 30 //block scope
//     var c = 40 
// }

// console.log(a);
// console.log(b);
// console.log(c); //impact 

// blocks 
// {} problem ha function ka sath ata ha toh scope bolte ha

// var c = 300   //global

let a = 300
if (true){
    let a = 10 
    const b = 30 //block scope
    console.log("inner:", a);  // output 10 or 300 
    
}
console.log(a);
