const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/todos", todoController.getAllTodos);

router.get("/todos/:id", todoController.getTodoById);

router.get("/todos/search/:title", todoController.getTodosByTitle);

router.post("/todos", todoController.addTodo);

router.put("/todos/:id", todoController.updateTodo);

router.delete("/todos/:id", todoController.deleteTodo);

router.put("/todos/:id/completed", todoController.markTodoAsCompleted);

module.exports = router;
