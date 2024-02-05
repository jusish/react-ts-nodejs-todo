const Todo = require("../models/TodoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo Not Found" });
    }
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.getTodosByTitle = async (req, res) => {
  try {
    const titleQuery = req.params.title;

    if (!titleQuery) {
      return res
        .status(400)
        .json({ error: "Title parameter is required for search" });
    }

    const todos = await Todo.find({
      title: { $regex: titleQuery, $options: "i" },
    });

    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { title, startDate, endDate } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const existingTodo = await Todo.findOne({ title });

    if (existingTodo) {
      return res
        .status(400)
        .json({ error: "Todo with the same title already exists" });
    }

    const newTodo = new Todo({
      title,
      startDate,
      endDate,
      completed: false,
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

exports.markTodoAsCompleted = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo Not Found" });
    }

    todo.completed = true;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
