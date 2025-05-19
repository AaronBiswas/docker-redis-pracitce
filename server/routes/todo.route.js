import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.controller.js";

const router = Router();


router.post("/new",createTodo)
router.get("/tasks",getTodos)
router.put("/update/:todoId",updateTodo)
router.delete("/delete/:todoId",deleteTodo)

export default router;