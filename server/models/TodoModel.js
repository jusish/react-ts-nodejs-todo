const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  startDate: {
    type: "Date",
    required: true,
  },
  endDate: {
    type: "Date",
    required: true,
  },
  completed: {
    type: "Boolean",
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
