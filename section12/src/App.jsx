import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/Notfound";

// 1. "/" : 모든 일기 조회하는 Home
// 2. "/new" : 새 일기 작성하는 페이지
// 3. "/diary" : 일기를 조회하는 view 페이지

// Routes 컴퍼넌트 내에는 Route 컴퍼넌트만 들어갈 수 있음
// Routes 컴퍼넌트 밖에 추가하는 경우 모든 페이지에 적용됨

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}>HOME</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button className="BasicButton" onClick={onClickButton}>
        New 페이지 이동
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
