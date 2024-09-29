// calll stack / execute kaisa hoga 

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
