// +++++++++++++++++++++++++++ STACK +++++++++++++++

// stack (Primitive) , Heap (non- primitive type)

let myYoutubename  = "ANAMOKAARAI"
let anothername = myYoutubename
anothername = "anadesigner"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "anamikrij",
    upi: " usejeiru@1",
}

let usertwo = userOne

usertwo.email = "anamikasd@1231"

console.log(usertwo.email);
console.log(userOne.email);