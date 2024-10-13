const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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
  res.send("welcome to root route");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Listening at the port: ${PORT}`);
});
