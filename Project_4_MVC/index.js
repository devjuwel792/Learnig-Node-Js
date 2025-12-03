import express from "express";
import ContactRoutes from "./routes/contacts.route.js";
import connectDB from "./config/database.js";

const app = express();
const port = 5000;

// Database
connectDB();

// server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Middleware

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routers
app.use("/", ContactRoutes);
