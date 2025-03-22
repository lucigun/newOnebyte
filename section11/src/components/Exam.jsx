import { useReducer } from "react";

//reducer -> 변환기, 실제로 상태를 변화시키는 함수
function reducer(state, action) {
	console.log(action, state);
	// if (action.type === "INCREASE") {
	// 	return state + action.data;
	// } else if (action.type === "DECREASE") {
	// 	return state - action.data;
	// }
	switch (action.type) {
		case "INCREASE":
			return state + action.data;
		case "DECREASE":
			return state - action.data;
		default:
			return "잘못된 입력값입니다.";
	}
}

const Exam = () => {
	// dispatch -> 상태변화가 필요하다는 사실을 알리는 함수
	const [state, dispatch] = useReducer(reducer, 0);
	// action 객체
	const onClickPlus = () => {
		dispatch({
			type: "INCREASE",
			data: 1,
		});
	};
	const onClickMinus = () => {
		dispatch({
			type: "DECREASE",
			data: 1,
		});
	};

	return (
		<div>
			<h1>{state}</h1>
			<button onClick={onClickPlus}>+</button>
			<button onClick={onClickMinus}>-</button>
		</div>
	);
};

export default Exam;
