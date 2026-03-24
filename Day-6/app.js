// THIS iS for Practice

const express = require("express");

const app = express();
const port = 8080;

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log("Logged => " + time);
  next();
});
app.use("/", (req, res) => {
  res.send({
    data: [
      { id: 1, name: "Yash" },
      { id: 2, name: "Chetan" },
      { id: 3, name: "Pravin" },
    ],
  });
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
