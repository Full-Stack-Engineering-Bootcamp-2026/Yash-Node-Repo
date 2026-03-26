const express = require("express");
const app = express();

app.get("/book/:id", (req, res) => {
  const id = req.params.id;

  res.send({
    id,
  });
});

app.post("/book/:id", (req, res) => {
  const id = req.params.id;

  res.status(201).send({
    message: `book with id: ${id} added`,
  });
});

app.get("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  res.send({
    username,
    password,
  });
});

app.post("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === "yash123" && password === "12345") {
    res.send({
      message: "User has logged In",
    });
  }else{
    res.send({
        message:"Invalid Credentials"
    })
  }
});

app.listen(8080,()=>console.log(`Sever up on 8080`));
