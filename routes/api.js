import express from "express";
import {
  addTasks,
  deleteTask,
  readTasks,
  updateTask,
} from "../controller/task.js";

// import {desiredFunction} from "destination path"
// import  desiredFunction from "destination path";





const router = express.Router();

// ALLL TASK ROUTES
router.get("/tasks", readTasks);
router.post("/task/create", addTasks);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
