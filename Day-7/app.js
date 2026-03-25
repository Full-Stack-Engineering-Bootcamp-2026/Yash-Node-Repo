const express = require('express')
const route = require('./routes/route.js')

const app = express();
const PORT = 8080;


app.use((req,res,next)=>{
    console.log(`Logging this -> ${req.method} | ${req.url} | ${new Date().toLocaleTimeString()}`)
    next();
})
app.use((req,res,next)=>{
    console.log("Thank you for sending request...Greetings")
    next()
})

app.use('/',route)


app.listen(PORT,()=>{
    console.log(`Server up on ${PORT}`)
})