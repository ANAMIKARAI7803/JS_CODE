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

// ? use krna ha toh if else use hoga 

// combined objects ( array ki trh )

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3: "a", 4 : "b"}

// const obj3 = {obj1 , obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
