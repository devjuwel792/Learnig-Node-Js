const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contacts.model.js");

const app = express();
const port = 5000;

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud").then(() => {
  console.log("Database Connected.");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Middleware

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//Routes

// GET
app.get("/", async (req, res) => {
  const data = await Contact.find();
  // res.json(data)
  res.render("home", { data });
});

app.get("/show-content/:id", (req, res) => {
  res.render("show-content");
});

app.get("/add-content", (req, res) => {
  res.render("add-content");
});

app.get("/update-content/:id", (req, res) => {
  res.render("update-content");
});

// POST
app.post("/add-content", (req, res) => {});

app.post("/update-content", (req, res) => {});

app.post("/delete-content/:id", (req, res) => {});
