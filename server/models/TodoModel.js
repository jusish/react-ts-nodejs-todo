const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  endDate: Date,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
