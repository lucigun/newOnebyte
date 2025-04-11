import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Number,
      default: () => new Date().getTime(),
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
