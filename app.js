const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
const User = require("./models/user.js");

const userRoute = require("./routes/user.js");
const postRoute = require("./routes/post.js");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mytopsecreatcodeforinstagramcloneproject",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`err - ${err}`);
  });

async function main() {
  const url = "mongodb://127.0.0.1:27017/Instagram";
  await mongoose.connect(url);
}

app.get("/", (req, res) => {
  res.send("Welcome to root!");
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.use("/", userRoute);
app.use("/home", postRoute);

// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "page not found"));
// });

app.use((error, req, res, next) => {
  const { statusCode = 400, message = "something went wrog" } = error;
  console.log(error.message);
  res.status(statusCode).render("error.ejs", { error });
});

app.listen(PORT, () => {
  console.log(`Listening at the port: ${PORT}`);
});
