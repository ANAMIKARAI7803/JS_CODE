const coding = ["js", "py", "ruby", "cpp"]

//by default  injuct ye high order function ha 
// call back function
// coding.forEach(function(val) {
//     console.log(val);
    
// })

// hum issey (arrow function) se bhi use kr skte ha 

// coding.forEach( (val) => {
//     console.log(val);
    
// })


// 3 tarika hum issey printme se bhi kr skte refrece khud pass krdega

// function printme(val){
//     console.log(val);
    
// }
// coding.forEach(printme)

//-----arrow function se index val
// coding.forEach((index,item, arr) =>{
//     console.log(item, index, arr);
    
// })

const mycoding = [
    {
        language : "java",
        languageFileName : "java"
    },
    {
        language : "javascript",
        languageFileName : "js"
    },
    {
        language : "python",
        languageFileName : "py"
    },
    {
        language : "ruby",
        languageFileName : "rb"
    },
]
mycoding.forEach((item) =>{
    console.log(item.language);
    
})
