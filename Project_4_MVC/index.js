import express from "express";
import ContactRoutes from "./routes/contacts.route.js";
import connectDB from "./config/database.js";
import { contactMiddleware } from "./middleware/contacts.middleware.js";

const app = express();
const { PORT } = process.env;

// Database
connectDB();

// server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// application Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// app.use(contactMiddleware);

// Routers
app.use("/", ContactRoutes);
