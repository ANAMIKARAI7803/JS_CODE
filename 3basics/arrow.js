const user = {
    username: "anamika",
    age : 19,

    wecMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // current context only pprint
        
    }
}

// user.wecMessage()
// user.username = "gungun" ///chnage value only context
// user.wecMessage()


console.log(this);


//current context se this keyword

// browser ka andar = global object 
// empty objec 

function chai(){
    let username = "anamka"
    console.log(this.username);
    
}
// chai()  => --arrowfunctioon

const chai  = () => {
    let username = "anamika"
    console.log(this);
}
// chai()


