const students = ["Yash", "Chetan"]

const moreStudents = [...students, "Pravin", "Anurag"]

const mSt = [students, "Pravin", "Anurag"]
console.log(moreStudents)
console.log(mSt)


//Objects can also take advantage of spread operator.............


const studentName = {
    firstName: "Yash",
    lastName: "Kalange",
}

const studentAddress = {
    city: "Barmaati",
    state: "Maharastra",
}

const fullStudentDetails = {
    ...studentName,
    ...studentAddress,
}

console.log(fullStudentDetails)


//Rest opeartor/ Paramater

const takeManyInputs = (...many) => {
    return many;
}

console.log(
    takeManyInputs(1, 2, 3, 4, 5, 6))

console.log(takeManyInputs(7007, 8283, 6044, 8808, 229))


///Object Destructing

const inventory = {
    laptops: "dell",
    headphone: "Logitech",
    mouse: ["Artic fox", "Portronics"]
}

// const {laptopsList} = inventory;
// console.log(" laptop list  : " +laptopsList)

const { laptops } = inventory;
const { headphone, mouse } = inventory;  // de structred  variables should have same name as what key object has


console.log(laptops);

console.log(headphone + " & " + mouse)

// Array Destructuring
// destructed variables in array can have different name


const skills = ["Java", "Node", "React"]

const [topSkill1, topSkill2] = skills;
//0     //1                  //2 => React will not come beacause only 1 and 0 places have declared
console.log(topSkill1 + " " + topSkill2)
    



