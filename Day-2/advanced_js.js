const { resolve } = require("node:dns");

const inventory = {
    laptop: ["Apple", "Dell", "Lenevo"],
    mouse: "Logitech",
    speaker: ["JBL", "Boat"],
    phone: "Apple",
}

const copyOfInventory = inventory;
copyOfInventory.phone = "Samsung"

console.log(copyOfInventory);

console.log()

console.log(inventory); // I got to know that changing data of a copy resulted in modifying original Object
//Reason -=> at Line 9 , I am not copying contents but reference of inventory object

// I can solve this by using spread operator

const solution = { ...inventory }

solution.phone = "LG"

console.log(solution)
console.log(inventory)

// _____________________________________________________________________

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]

const merged = [...arr1, ...arr2]
console.log(merged);

const obj1 = { firstName: "Yash", lastName: "Kalange" }
const obj2 = { email: "yash@gmail.com", phone: 7007 }

const person = { ...obj1, ...obj2 };


const average = (...scores) => {
    let initialValue = 0
    const sum = scores.reduce(
        (a, c) => a + c,
        initialValue,
    );
    console.log(sum);
    return sum / scores.length;
}

console.log(average(1, 2, 3, 4, 5))


// _____________________________________________________________________


const employee = { empId : 101 ,firstName: "Yash", lastName: "Kalange", email: "yash@gmail.com", phone: 7007 }

const { firstName,lastName,email } = employee;

console.log(`Name of employee is ${firstName} ${lastName} and email adress is ${email}`)

const skills = ["Java", "React", "Node", "Next", "SQL"]

const [topSkill1, , topSkill3] = skills;

console.log(`The following are my first and third Skills ${topSkill1}, & ${topSkill3}`)

// _____________________________________________________________________


console.log("START")
function delay(ms){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Done waiting!`)
        },ms)
    })
    return promise;
}

const returnedPromise = delay(5000)
returnedPromise.then((message)=>{
    console.log(message)
})