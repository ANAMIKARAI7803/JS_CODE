//----ARRAY SPECIFIC 

// for of 

// ["","",""]
// [{},{},{}]

const arr = [1 , 2 , 3 , 4 ,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "jellu"
for (const greet of greetings) {
    // console.log(greet);
    
}

// ----MAPS------(array ki trh or uniqueee value store hota ha)
// (object annd hold the key value pair)
// (MOSTLY UNIQUE value ko dekhta ha)
// const map = new Map()
// map.set('IN', 'India')
// map.set('fr', "France")

// console.log(map);
// for (const key of map) {  //agr muje aray me value lena ha toh square bracket lga skte ha
//     console.log(key);
    
// }

for (const [key, value] of map) {  //agr muje aray me value lena ha toh square bracket lga skte ha
    // console.log(key, '=', value);
    
}

// object hota tb lga skta kya dekho ab

// (ye error peint krega kyuki ye iterate nhi ha )
// const map = new Map()
// map.set('IN', 'India')
// map.set('fr', "France")

// for (const key in map){
//     console.log(map);
    
// }