import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.js";
import "./instrumentation.js";

// 환경 변수 설정
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우트 설정
app.use("/api/todos", todoRoutes);

// MongoDB 연결
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/todo-app")
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");
    // 서버 시작
    app.listen(PORT, () => {
      console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
    });
  })
  .catch((error) => {
    console.error("MongoDB 연결 오류:", error);
  });

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Todo API 서버가 실행 중입니다.");
});
