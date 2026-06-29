import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import taskRoute from "./Routes/taskRoute.js";
import connectDB from "./Models/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
connectDB()

app.use("/api/tasks",taskRoute);

app.listen(3000,()=>{
    console.log("Server Running");
});