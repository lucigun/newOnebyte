import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react공부하기",
    date: new Date().getTime,
  },
  {
    id: 1,
    isDone: false,
    content: "밥먹기",
    date: new Date().getTime,
  },
  {
    id: 2,
    isDone: false,
    content: "공부하기",
    date: new Date().getTime,
  },
];

function App() {
  const [todos, setTodos] = useState([mockData]);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <Editor onCreate={onCreate} /> {/* onCreate prop 추가 */}
      </section>
      <section>
        <List />
      </section>
    </div>
  );
}

export default App;
