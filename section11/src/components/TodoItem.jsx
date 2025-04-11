import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App.jsx";

const TodoItem = ({ _id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(_id);
  };

  const onClickDelete = () => {
    onDelete(_id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// 고차 컴퍼넌트 Higher Order Component(HOC)
// 컴퍼넌트를 받아서 다른 컴퍼넌트를 반환하는 함수
// memo(컴퍼넌트, 비교함수)
// 비교함수 : Props가 바뀌었는지 판단하는 함수
// True => 업데이트 안함
// False => 업데이트 함

// export default memo(TodoItem, (prevProps, nextProps) => {
// 	// 반환값에 따라 Props가 바뀌었는지 판단
// 	// True => 업데이트 안함
// 	// False => 업데이트 함
// 	if (prevProps.id !== nextProps.id) return false;
// 	if (prevProps.isDone !== nextProps.isDone) return false;
// 	if (prevProps.content !== nextProps.content) return false;
// 	if (prevProps.date !== nextProps.date) return false;
// 	return true;
// });

export default memo(TodoItem);
