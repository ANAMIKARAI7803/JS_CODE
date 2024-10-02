// singleton used connstrutor but not literals 
// two method ha -- literla and constructor

//object literals 

//   key value pair
const mySym = Symbol("key1")
const JsUser = {
    name : "ana",
    "full name" : "anamika rai",
    [mySym] : "mykey1",
    age : 18,
    locations : "bhopap",
    email: "anamikarai7803@gmail",
    isLoggedIn : false,
    lastloginDay :["monday","tuesday"],
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser.mySym)


// symbol ko square bracket me likho nhi toh bo key value pair ki trh kaam krega 


JsUser.email = "ajakeirkd@W334"
Object.freeze(JsUser)
JsUser.email = "ajdfksk@132324"
console.log(JsUser);

// symbol key value ki trh kaam karega bina bracket ka

JsUser.greeting = function(){
    console.log("hello JS user");

}
console.log(JsUser.greeting);

// GREETING KREK FUNCTION LGA DIYA AGL SE DEFINE KRNE KA LIYE function store 
JsUser.anamika = "rai"





