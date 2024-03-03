import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error)=> console.error(error))

app.listen(PORT, () => {
    console.log("Server is running on", PORT )
});

app.use('/api', userRoutes);