const Post = require("../models/post.js");
const { wrapAsync } = require("../utils/wrapAsync.js");

module.exports.indexRoute = async (req, res) => {
  const posts = await Post.find();

  req.flash(
    "success",
    "lorem jskhdkjhcjkdhskjdhdskjfhjkdshfkjhfjkdhfkjdhfjkdhjkhfjkhfskjhfjdhfjkdshkfhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
  );
  res.render("index.ejs", { posts });
};

module.exports.getNewRought = (req, res) => {
  res.render("post/new.ejs");
};

module.exports.PostNewRoute = wrapAsync(async (req, res) => {
  const { image, comment } = req.body;

  const newPost = new Post({ image, comment });
  await newPost.save();

  res.redirect("/home");
});
