import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// 모든 Todo 항목 가져오기
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 새 Todo 항목 생성하기
router.post("/", async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "내용을 입력해주세요." });
    }

    const newTodo = new Todo({
      content,
      isDone: false,
      date: new Date().getTime(),
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Todo 항목 상태 업데이트 (완료/미완료)
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "해당 Todo를 찾을 수 없습니다." });
    }

    todo.isDone = !todo.isDone;
    const updatedTodo = await todo.save();

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Todo 항목 삭제하기
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "해당 Todo를 찾을 수 없습니다." });
    }

    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo가 삭제되었습니다." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
