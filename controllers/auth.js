const User = require("../models/user");
const bcrypt = require("bcryptjs");
const sendEmail = require('../util/sendEmail')

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.redirect("/login");
  }
  const correctPass = await bcrypt.compare(password, user.password);
  if (!correctPass) {
    return res.redirect("/login");
  }
  req.session.isLoggedIn = true;
  // req.session.user = user;
  req.session.user = { _id: user._id.toString() };
  req.session.save((err) => {
    console.log("[][][][][][][][]" + err);
  });
  return res.redirect('/')

  // .then(user => {
  //   console.log('=====>'+user)
  //   console.log('=====>')
  //   req.session.isLoggedIn = true;
  //   // req.session.user = user;
  //   req.session.user = { _id: user._id.toString() };
  //   req.session.save(err => {
  //     console.log("[][][][][][][][]"+err);
  //     res.redirect('/');
  //   });
  // })
  // .catch((err) => console.log(err))
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "SignUp",
    isAuthenticated: false,
  });
};
exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  const resp = await User.findOne({ email: email });
  if (resp) {
    return res.redirect("/signup");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    email: email,
    password: hashedPassword,
    cart: { items: [] },
  });
  await user.save();
  res.redirect("/login")
  return sendEmail(email);
  
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
exports.getReset = (req, res, next) => {
  res.render("auth/reset", {
    path: "/reset",
    pageTitle: "Reset",
  });
};