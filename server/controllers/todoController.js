const Todo = require("../models/TodoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { title, startDate, endDate } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = new Todo({
      title,
      startDate,
      endDate,
    });

    await newTodo.save();

    const createdTodo = await Todo.findById(newTodo._id);

    res.status(201).json(createdTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};
