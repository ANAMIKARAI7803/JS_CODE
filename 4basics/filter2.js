// reduce function
// accumulator intial value dedeta ha

const mNums = [1,2,3,4]

const myTotal = mNums.reduce(function (acc , currval){
    console.log(`acc ${acc} and currval: $(currval)`);
    return acc + currval
},0)

console.log(myTotal);

//for loop and sb tarika se kr skte ha 
