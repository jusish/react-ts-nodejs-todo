const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Define routes
router.get("/todos", todoController.getAllTodos);
router.get("/todos/:id", todoController.getTodoById);
router.post("/todos", todoController.addTodo);
router.put("/todos/:id", todoController.updateTodo);
router.delete("/todos/:id", todoController.deleteTodo);
router.put("/todos/:id/completed", todoController.markTodoAsCompleted);

// Export the router
module.exports = router;
