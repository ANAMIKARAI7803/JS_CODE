// positive number practic equstion


let arr = [];
const positiven =[1, 3, "anamika" , "5", 7, 8  ];
for (let i = 0 ; i < positiven.length; i++){
    if(typeof(positiven[i]) === "number"){
        if(positiven[i] > 0 ){
            arr.push(positiven[i])
        }
    }
}
console.log(arr);