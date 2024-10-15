const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Comment",
  //   },
  // ],
  bio: {
    type: String,
    default: "",
  },
  // followers: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //     min: 0,
  //   },
  // ],
  // following: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //     min: 0,
  //   },
  // ],
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
