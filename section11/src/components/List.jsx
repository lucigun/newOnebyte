import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App.jsx";

const List = () => {
  const { todos, isLoading, error } = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const getFilteredData = (todo) => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };
  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzeData호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  //  [] <= 의존성배열 : deps
  // deps에 있는 값이 변경될때만 함수가 호출된다.

  // const { totalCount, doneCount, notDoneCount } = getAnalyzeData();

  return (
    <div className="List">
      <h4>todo list</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어 입력"
      ></input>
      {isLoading ? (
        <div className="loading">로딩 중...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="todoswrapper">
          {filteredTodos.map((todo) => {
            return <TodoItem key={todo._id} {...todo} />;
          })}
        </div>
      )}
    </div>
  );
};

export default List;
