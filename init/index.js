const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/post.js");
const { instagramPosts } = require("./data.js");

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

async function DataInit(data) {
  let result = await Post.insertMany(data);
  console.log("Data was initilized");
}

DataInit(instagramPosts);
