// function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400 , 500));


// rest or spread use case kab bolenga

// spread = multple value assign krna (bikhar jata ha )
// rest multiple num ka andar or bhi value ho skti ha isley hume pta nhi ha toh toh hum Rest
//  rest operator ...calculateCartPrice


// convert object in function
const user = {
    username : "anamika",
    age : 23
}
function handleObject(anyObject){
    console.log(`${anyObject.username} ${anyObject.age}`);
    
}
handleObject(user)

// object banake bhi pass kr pa rhe ha

handleObject({
    username : "anmma",
    age : 22
})

// array ka sath kr skte h

const myNew = [33, 55  ,55 ,544 ,33]
function returnScValue(getArray){
    return getArray[1]
}
console.log(returnScValue(myNew));

//array , function , object converiosn dekhte ha 
 