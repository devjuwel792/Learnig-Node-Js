import express from "express";

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about-us", (req, res) => {
  const items = ["Apple", "Mango", "Pineapple"];
  res.render("about", {
    title: "About Page",
    message: "",
    items,
  });
});
