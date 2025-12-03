import mongoose from "mongoose";
// Database Connection
const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud").then(() => {
    console.log("Database Connected.");
  });
};

export default connectDB;
