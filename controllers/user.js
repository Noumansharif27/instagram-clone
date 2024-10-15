const User = require("../models/user.js");
const ExpressError = require("../utils/ExpressError.js");
const { wrapAsync } = require("../utils/wrapAsync.js");

module.exports.getSignUpRoute = (req, res) => {
  res.render("user/signin.ejs");
};

module.exports.postSignUpRoute = wrapAsync(async (req, res) => {
  try {
    const user = req.body.user;
    const newUser = await User({ username: user.username, email: user.email });
    const registeredUser = await User.register(newUser, user.password);

    req.flash("success", "Welcome on instagram");
    res.redirect("/home");
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
});

module.exports.getLoginRoute = (req, res) => {
  res.render("user/login.ejs");
};

module.exports.postLoginRoute = wrapAsync(async (req, res) => {
  console.log(req.user);
  console.log(res.locals.currentUser);
  res.redirect("/home");
});
