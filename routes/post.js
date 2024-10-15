const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/post.js");

router.route("/").get(postControllers.indexRoute);

router
  .route("/new")
  .get(postControllers.getNewRought)
  .post(postControllers.PostNewRoute);

module.exports = router;
