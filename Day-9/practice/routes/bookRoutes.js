const express = require("express");
const app = express();

const bookRoutes = express.Router();
const bookController = require("../controllers/bookController");
const Books = require("../models/Book");

bookRoutes.get("/", bookController.getBooks);
// bookRoutes.post('/',bookController.addBook)

bookRoutes.post('/add',(req, res) => {
  try {
    const {id ,title} = req.body
    const book = new Books(id, title);
    console.log(book);
    book.save();

    return res.status(201).json({
      message: `Book name ${title} with id : ${id} has been created `,
    });
  } catch (error) {
    return res.status(500).json({
      message: "eroor is "+ error,
    });
  }
})

bookRoutes.get("/:id", bookController.getBookByid);

module.exports = bookRoutes;
