const userEmail = []

if(userEmail){
    console.log("got a mail");  
} else {
    console.log("Don't have user email");
    
}
//-----truthy---
// 1 (koi bhi non-zero number)
// "hello" (koi bhi non-empty string)
// {} (empty object)
// [] (empty array)

// ----falsy-----
// 0
// -0
// BigInt 0n
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
// false


if (userEmail.length === 0){
    console.log("array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ //object ko pass key mein or return krega array
    console.log("object is empty");
}

//---NULLISH coalescing Operator (??) : null undefined

let val1 ;

val1 = 5 ?? 10
val1 = null ?? 10 // complex funtion ha 
// basically nulll value safety carefully operator use ha krte ha 
var1 = undefined ?? 15 
// null or undefined ka liye hi ban aha 


console.log(val1);


// ----operator ternatory ---
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 8");
;


