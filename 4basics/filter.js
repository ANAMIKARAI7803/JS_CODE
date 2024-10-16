const myNumers = [2, 4, 6, 8, 10]

// const newNum = myNumers.map( (num) =>{ return num + 10})

const neNum = myNumers
                .map((num) =>num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
console.log(neNum);

//map cal back function easy function better in for each
// agr scope use toh return use krna ha

