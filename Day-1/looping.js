const students = ["Yash", "Chetan" ,"Pravin"];

for(let x of students)
{
    console.log(x);
}

console.log("Using map function");

students.map( x => console.log("Student's name is : " + x) )

const arr= [1,2,3,4,5];

const evenArr = arr.map( x => x*2);

console.log("Original array : " + arr)

console.log("Modified array : " + evenArr)