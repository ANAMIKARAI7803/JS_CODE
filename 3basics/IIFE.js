// Immediately Invoked FUnction expression


// global scope ka pollution se dikkat hoti usko hatne ka liye hum Iife ka use kreta ha 
(function chai (){
    // named Iife
    console.log(`db `);
    
}) ();  //; jaruri ha 

( (name) => {
    console.log(`db`);
}) ('anamika')