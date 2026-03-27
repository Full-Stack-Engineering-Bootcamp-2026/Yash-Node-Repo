const Books = require("../models/Book");

// exports.addBook = (req, res) => {
//   try {
//     const book = new Books(req.body.id, req.body.title);
//     console.log(book);
//     book.save();
//     res.status(201).json({
//       message: `Book name ${title} with id : ${id} has been created `,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error,
//     });
//   }
// };
exports.getBooks = (req, res) => {
  try {
    const books = Books.fetchAll();
    console.log(books)
    if (books.length === 0) {
      return res.status(200).json({
        message: "There are no Books",
      });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: "Book server error",
    });
  }
};

exports.getBookByid = (req, res) => {
  const { id } = req.params;
  const books = Books.fetchAll()
  const book = books.filter((x) => {
    return x.id == id;
  });
  res.status(200).json(book);
};
