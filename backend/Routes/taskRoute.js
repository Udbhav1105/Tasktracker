import express from "express";

import {

createTask,

getTasks,

updateTask,

deleteTask,
complete,
getTasksById

} from "../Controllers/taskController.js";

const router=express.Router();

router.post("/",createTask);

router.get("/get",getTasks);

router.get("/getbyid/:id",getTasksById);

router.put("/:id",updateTask);

router.delete("/delete/:id",deleteTask);

router.post('/complete/:id',complete)

export default router;