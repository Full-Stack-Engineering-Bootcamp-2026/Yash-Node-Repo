//Callbacks & Promise

const fetchData = (text)=>{
    setTimeout(()=>{
        console.log(text)
    },2000)
}

setTimeout(() =>{
    fetchData("Hello FOR  fetch")
    fetchData("take 2")
},2000)


console.log("1")
console.log("2")