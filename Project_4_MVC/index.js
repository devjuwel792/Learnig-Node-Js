import express from "express";
import mongoose from "mongoose";
import Contact from "./models/contacts.model.js";

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

app.get("/show-content/:id", async (req, res) => {
  // const data = await Contact.findOne({ _id: req.params.id });
  const data = await Contact.findById(req.params.id);
  //  res.json(data);
  res.render("show-content", { data });
});

app.get("/add-content", (req, res) => {
  res.render("add-content");
});

app.get("/update-content/:id", async (req, res) => {
  const data = await Contact.findById(req.params.id);
  res.render("update-content", { data });
});

// POST
app.post("/add-content", async (req, res) => {
  await Contact.insertOne({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });

  res.redirect("/");
});

app.post("/update-content/:id", async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  res.redirect("/");
});

app.get("/delete-content/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
