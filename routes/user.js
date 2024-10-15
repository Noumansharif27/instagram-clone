const express = require("express");
const router = express.Router();
const userConterollers = require("../controllers/user.js");
const passport = require("passport");

router
  .route("/signup")
  .get(userConterollers.getSignUpRoute)
  .post(userConterollers.postSignUpRoute);

router
  .route("/login")
  .get(userConterollers.getLoginRoute)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/home",
      failureFlash: true,
    }),
    userConterollers.postLoginRoute
  );

module.exports = router;
