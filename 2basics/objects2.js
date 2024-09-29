// const sym1 = Symbol("key");
// const sym2 = Symbol("key");

// console.log(sym1 === sym2);


// const tinderUser = new Object () ----singleton object 
const tinderUser = {} //----non singleton object

// value same hoti ha dono me 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// objects ka andar objects

const regularUser = {
    email : "ana@123@gmail.com",
    fullname : {
        userfullname: {
            firstname : "ana",
            lastname : "rai"
        }
    }
}
console.log(regularUser.fullname);

// ?: use krna ha toh if else use hoga (ternary opertor)

// combined objects ( array ki trh )

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3: "a", 4 : "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2) //empty object 

const obj3 = {...obj1,...obj2}
// console.log(obj3);  (spread operator agr bina dot lgya krnga bs refernce sari value dalnaha )

// -----Database VAlue lete ha toh kaisa lete ha ??


const users = [
    {
    id : 2,
    email: "ana12@gmail.com"
    },
    {
    id : 2,
    email: "ana12@gmail.com"
    },
    {
    id : 2,
    email: "ana12@gmail.com"
    },

]
users[1].email
console.log(tinderUser);

console.log(Object.keys[tinderUser]);
console.log(Object.values[tinderUser]); //

//(object inbuild ha or iska typeof ha function ha)


// loop me uuse kr skte ha sari key values nikal lete ha 
// enteries kaam value 