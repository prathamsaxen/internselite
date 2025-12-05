const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minlength: [1, "Title must be at least 1 characters long"],
    maxlength: [200, "Title cannot be more than 200 characters long"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [2000, "Description cannot be more than 2000 characters long"],
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
