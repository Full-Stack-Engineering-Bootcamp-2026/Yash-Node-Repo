const express = require("express");
const path = require("path");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
//   res.send("<h1>Root</h1>");
  res.sendFile(path.join(__dirname,'..','views','root.html'))
});

router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname,'..','views','user.html'))
});

router.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname,'..','views','product.html'))
});

module.exports = router;
