import express from "express";
import mongoose from "mongoose";
import ContactRoutes from "./routes/contacts.route.js";

const app = express();
const port = 5000;

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud").then(() => {
  console.log("Database Connected.");
});
// server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Middleware

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routers
app.use("/",ContactRoutes);
