import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate }) => {
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
	return (
		<div className="List">
			<h4>todo list</h4>
			<input
				value={search}
				onChange={onChangeSearch}
				placeholder="검색어 입력"></input>
			<div className="todoswrapper">
				{filteredTodos.map((todo) => {
					// return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate}/>;
					return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />; // onUpdate prop 추가
				})}
			</div>
		</div>
	);
};

export default List;
