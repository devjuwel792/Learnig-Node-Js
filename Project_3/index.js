const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Middleware

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
//Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/show-content", (req, res) => res.send("Hello World!"));
app.get("/add-content", (req, res) => res.send("Hello World!"));
app.post("/add-content", (req, res) => res.send("Hello World!"));
app.get("/update-content", (req, res) => res.send("Hello World!"));
app.post("/update-content", (req, res) => res.send("Hello World!"));
app.post("/delete-content", (req, res) => res.send("Hello World!"));
