// Create server.js using Node's http module (no Express yet)
// The server should listen on port 3000
// Respond with a simple HTML page that includes your name and today's date
// Set the correct Content-Type header (text/html)
// Log a message to the console when the server starts


const http = require("http")

const name = "Yash Kalange"
const date = new Date().toLocaleDateString();

const obj = {
    name,date
}

const server = http.createServer((req, res)=>{
    console.log("Log : Incoming request")
    res.statusCode = 200
    // res.setHeader('Content-Type','text/html')
    res.setHeader('Content-Type', 'application/json')

    // res.write(`<h1> My name is ${name} and today's date is ${date}</h1>` )
    res.write(JSON.stringify(obj))
    res.end()
})


server.listen(3000,()=>{
    console.log("server running on port 3000")
})