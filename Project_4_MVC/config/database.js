import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// Database Connection
const { MONGO_URL } = process.env;
const connectDB = () => {
  mongoose.connect(MONGO_URL).then(() => {
    console.log("Database Connected.");
  });
};

export default connectDB;
