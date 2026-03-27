const express = require("express");
const app = express();

app.use(express.json())

const adminRouter = require("./routes/adminRoutes");
const bookRoutes = require("./routes/bookRoutes");
const notFound = require("./controllers/404");

app.use("/admin", adminRouter);

app.use("/books", bookRoutes);

app.use(notFound.notFound);
app.listen(8080, () => {
  console.log(`Running on 8080`);
});
