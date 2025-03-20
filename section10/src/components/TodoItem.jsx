import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
	const onChangeCheckbox = () => {
		onUpdate(id);
	};

	const onClickDelete = () => {
		onDelete(id);
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

export default memo(TodoItem, (prevProps, nextProps) => {
	// 반환값에 따라 Props가 바뀌었는지 판단
	// True => 업데이트 안함
	// False => 업데이트 함
	if (prevProps.id !== nextProps.id) return false;
	if (prevProps.isDone !== nextProps.isDone) return false;
	if (prevProps.content !== nextProps.content) return false;
	if (prevProps.date !== nextProps.date) return false;
	return true;
});
