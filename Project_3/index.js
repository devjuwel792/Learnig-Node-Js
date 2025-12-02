const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Middleware

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/show-content", (req, res) => {
  res.render("show-content");
});
app.get("/add-content", (req, res) => {
  res.render("add-content");
});
app.post("/add-content", (req, res) => {
  
});
app.get("/update-content", (req, res) => {
  res.render("update-content");
});
app.post("/update-content", (req, res) => res.send("Hello World!"));
app.post("/delete-content", (req, res) => res.send("Hello World!"));
