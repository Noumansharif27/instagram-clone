const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  // likes: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Comment",
  //   },
  // ],
  // share: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

module.exports = mongoose.model("Post", postSchema);
