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
		date: new Date().getTime(),
	},
	{
		id: 1,
		isDone: false,
		content: "밥먹기",
		date: new Date().getTime(),
	},
	{
		id: 2,
		isDone: false,
		content: "공부하기",
		date: new Date().getTime(),
	},
];

function App() {
	const [todos, setTodos] = useState(mockData); // 수정된 부분
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

	const onUpdate = (targetId) => {
		// todos state의 값에서 targetId를 가진 객체를 찾아서 isDone 값을 반전시킨다.
		setTodos(
			todos.map((todo) =>
				todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const onDelete = (targetId) => {
		// 인수로 todos 배열에서 targetId와 일치하는 id를 요소만 삭제한 새로운 배열
		setTodos(todos.filter((todo) => todo.id !== targetId));
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
				<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
			</section>
		</div>
	);
}

export default App;
