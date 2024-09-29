// ---- function ka andar andar 

function one(){
    const username = "anamika"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one() /// one jo ha two ko access krte ha 

if (true){
    const username = "ana"
    if(username === "ana"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ========== Intersting 

console.log(addone(5));

function addone(num){
    return num + 1 
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}

// 2 vala run nhi hu a ha error ajyega add two ka access nhi kr skta ha 2 
// ye process hoisting ha 