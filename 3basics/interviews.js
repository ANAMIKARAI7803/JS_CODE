// calll stack / execute kaisa hoga 
//JavaScript ka call stack ek mechanism hota hai jo function calls 
// ko track karta hai. Kyunki JavaScript single-threaded hai, ismein ek time pe sirf
//  ek hi kaam ho sakta hai, aur jo last mein call hota hai, wo pehle complete hota hai.
//  Is process ko LIFO (Last In, First Out) kehte hain.

// javascript 

// {} GLOBAL -(THIS) --- WINDOW OBJECT

// SINGLE THREADED
// GLOBAL EXECUTION 
// FUNCTION EXECUTION --
// eVAL EXECUTION 2TYPES

// {} -MEMORY PHASE (CREATION) 
//    - eXECUTION PHASE
// MEMORY PHASE -- VAL UNDEFINE OR GLOBAL EXECUTION THIS KA SATH"
// EXECUTION PHASE -- LAST EXECUTE

// LIFO (CALL BACK)

function one(){
    console.log("one");
    two()
    
}
function two(){
    console.log("two");
    three()
    
}
function three(){
    console.log("three");
}
one()