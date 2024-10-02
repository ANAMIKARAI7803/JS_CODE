// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");

function sayMyName() {
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
}

// sayMyName()

// function addTwoNumber(num1, num2){ //parameters

//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){ //parameters

    // let result = num1 + num2
    // console.log("anamika");
    // return result

    // return ka dusra type
    return num1 + num2
    
}
const result = addTwoNumber(12, "3")//arugments like 12 and 3 
 
// console.log("results:", result);


function loginUsers(username){
    if(username === undefined){ // hum isko !username likh skte ha same outuput
    console.log("please enter a user name ");
    return //agr ek baar return likhdo toh dubra dikkat nhi 
    
    }
    return `${username} just logged`
}
// console.log(loginUsers("ana"));  //parameter liy jate ha 

console.log(loginUsers()) ; //  jab koi value pass nhi hoti toh bo undefined output

