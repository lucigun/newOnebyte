import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";

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

function reudcer(state, aciton) {
	switch (aciton.type) {
		case "CREATE":
			return [aciton.data, ...state];
		case "UPDATE":
			return state.map((item) =>
				item.id === aciton.targetId ? { ...item, isDone: !item.isDone } : item
			);
		case "DELETE":
			return state.filter((item) => item.id != aciton.targetId);
		default:
			return state;
	}
}

function App() {
	const [todos, dispatch] = useReducer(reudcer, mockData);
	const idRef = useRef(3);

	const onCreate = (content) => {
		dispatch({
			type: "CREATE",
			data: {
				id: idRef.current++,
				isDone: false,
				content: content,
				date: new Date().getTime(),
			},
		});
	};

	const onUpdate = (targetId) => {
		dispatch({
			type: "UPDATE",
			targetId: targetId,
		});
	};

	const onDelete = (targetId) => {
		dispatch({
			type: "DELETE",
			targetId: targetId,
		});
	};

	return (
		<div className="App">
			<section>
				<Header />
			</section>
			<section>
				<Editor onCreate={onCreate} />
			</section>
			<section>
				<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
			</section>
		</div>
	);
}

export default App;
