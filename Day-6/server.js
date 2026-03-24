const express = require("express");
const app = express();



const PORT = 8080;
const welcome = "<h1>Welcome to my Webpage....How are you?</h1>";
const about =
  "<h2> About my Journey </h2><p>During my Node bootcamp journey I have covered core concepts of Javascirpt, What is node and how can you create a server and handle multiple requests in it. Today I have started Express which makes everything easy while working on Node </p>  ";

const contact =
  "<h2>Contact</h2><p>My Name is Yash Kalange and I am in Full Stack Engineering-2026 batch</p>";

const skills =
  "<ul><li>JavaScript</li><li>TypeScript</li><li>React</li> <li>Node</li><li>Express</li><li>Java</li><li>SQL</li></ul>";

app.get("/", (req, res) => {
  res.send(welcome);
});

app.get("/about", (req, res) => {
  res.send(about);
});
app.get("/contact", (req, res) => {
  res.send(contact);
});
app.get("/skills", (req, res) => {
  res.send(skills);
});

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
});
