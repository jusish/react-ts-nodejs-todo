const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/todos", todoController.getTodos());
router.post("/todos", todoController.addTodo());
router.put("/todos", todoController.updateTodo());
router.delete("/todos", todoController.deleteTodo());



module.exports = router;
