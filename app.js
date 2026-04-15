  const path = require("path");
  require("dotenv").config();
  const express = require("express");
  const bodyParser = require("body-parser");
  const mongoose = require("mongoose");
  const session = require("express-session");
  const MongoDBStore = require("connect-mongodb-session")(session);
  const errorController = require("./controllers/error");
  const User = require("./models/user");

  const app = express();

  // console.log()
  const store = new MongoDBStore({
    uri: process.env.MONGO_ATLAS_CONNECTION_URI,
    collection: "sessions",
  });

  console.log("URi "+process.env.MONGO_ATLAS_CONNECTION_URI);
  app.set("view engine", "ejs");
  app.set("views", "views");

  const adminRoutes = require("./routes/admin");
  const shopRoutes = require("./routes/shop");
  const authRoutes = require("./routes/auth");

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "public")));
  app.use(
    session({
      secret: "my secret",
      resave: false,
      saveUninitialized: false,
      store: store,
    }),
  );

  app.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    console.log("Reached here");
    
    console.log('======inreq '+req);
    User.findById(req.session.user._id)
    // User.findById(req.session.user._id)
    .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => console.log(err));
  });

  app.use("/admin", adminRoutes);
  app.use(shopRoutes);
  app.use(authRoutes);

  app.use(errorController.get404);

  mongoose
    .connect(process.env.MONGO_ATLAS_CONNECTION_URI)
    .then((result) => {
      app.listen(8080);
    })
    .catch((err) => {
      console.log(err);
    });
