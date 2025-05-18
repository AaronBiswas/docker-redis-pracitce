import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todo.controller.js";

const router = Router();


router.post("/new",createTodo)
router.get("/tasks/:userId",getTodos)

export default router;