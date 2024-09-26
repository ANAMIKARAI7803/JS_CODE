const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread (..............)


const another_array = [1,2,3[4,5,6],7[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
 
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"))
console.log(Array.from({name : "Hitesh"}))   // interseting case lre

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));
