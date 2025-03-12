import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox"></input>
      <div className="content">todo</div>
      <div className="date">date</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
