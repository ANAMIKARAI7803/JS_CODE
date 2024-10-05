// if 

// const  isUserloggedIn = true
// const temperature = 41

// if (temperature === 40){   //(yahi execute hoga ya fir execute kaisa hoga toh condition check or uske hisab se hum conditional bhi use krte ha)
//     console.log("less than 50")
// } else{
// console.log("temperature is greater than 50");
// }
// console.log("Execute");

// < , > , <= ,>= , ==,
// !=(notequal o/t true) , ===(type check) , !== (negative form check)
// 2 <= 2 (equal result)
// 2 !=3
// 2 === "3"


//(SCOPE RELATED)

// const score = 200

// if(score > 100){
//     // const power = "fly" //(ye scope ka rules ka ispase ouput dega )
//     var power = "fly"
//     console.log(`User Power: ${power}`); //(is point pr execute hogi )
    
// }
// console.log(`User Power: ${power}`); //(is point pr nhi kyuki scope ka problm ha )

// -----SHORT NOTATION----

// const balance = 1000

// if(balance > 500) console.log("test");

// (Scope use nhi krte direct likh dete ha )
// implsivescope DIRect scope ki value print (online me likh dete ha or multiple me bhi )

// -----NESTED CONDITION---

// const balance = 1000

// if (balance < 500){
//     console.log("less than 750");
// } else if (balance < 750){
//     console.log("less than 750");  
// } else if (balance < 900){
//     console.log("less than 750");

// }else{
//     console.log("less than 1250");
// }
//(MULTIPLE THINGS TO DO CODE EXECUTE)

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to course buy");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
} //(multiple valued checked kr skte ha )