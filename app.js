const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user");
const Product = require("./models/product");
const errorController = require("./controllers/error");

const app = express();
const sequelize = require("./util/database");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const Cart = require("./models/cart");
const CartItems = require("./models/cart-items");
const Order = require('./models/order')
const OrderItem = require('./models/order-items')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(er));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItems });
Product.belongsToMany(Cart, { through: CartItems });

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, {through:OrderItem})


sequelize
  .sync()
  // .sync({force:true})
  .then((result) => {
    return User.findByPk(1);
  })
  .then ((user) => {
    if (!user) {
      User.create({ name: "Yash", email: "yash@kalange.com" });
    }
    return user;
  })
  .then((user) => {
    // console.log(user);
    return user.createCart();
  })
  .then((cart) => {
    app.listen(8080, () => {
      console.log("Up on 8080");
    });
  })
  .catch((err) => console.log(err));
