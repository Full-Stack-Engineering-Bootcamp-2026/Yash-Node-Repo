const name = "Yash Kalange";
const age = 23;
const hobby = "Playing Video Games"

console.log(`Hi, I'm ${name}, I'm ${age} years old and I love ${hobby}.`)

// _____________________________________________________________________

const square = n => n * n;
const isEven = n => n % 2 == 0

let n = 5
console.log(`Sqaure of ${n} is: ` + square(n));
console.log(`Is ${n} even? => ` + isEven(n))

// _____________________________________________________________________

const fruits = ["Apple", "Watermelon", "Mango", "Muskmelon", "Kiwi", "Orange"]

const upperCaseFruits = fruits.map(x => x.toUpperCase());
console.log(upperCaseFruits)

const filterFiveChar = fruits.filter( x => x.length > 5 )
console.log(filterFiveChar)

// _____________________________________________________________________


const student = { 
    name : "Yash Kalange",
    course : "Full Stack Engineering Bootcamp",
    year : "Final Year",
}
student.getDetails()
console.log(`Name of Student is ${student.name} , Course name is ${student.course} and is in ${student.year}`)