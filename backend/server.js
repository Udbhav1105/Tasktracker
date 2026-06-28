import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import taskRoute from "./Routes/taskRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"));

app.use("/api/tasks",taskRoute);

app.listen(3000,()=>{
    console.log("Server Running");
});