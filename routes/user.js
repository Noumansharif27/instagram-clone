const express = require("express");
const router = express.Router();
const userConterollers = require("../controllers/user.js");

router
  .route("/signup")
  .get(userConterollers.getSignUpRoute)
  .post(userConterollers.postSignUpRoute);
