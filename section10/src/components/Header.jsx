import "./header.css";
import { memo } from "react";

const Header = () => {
	const date = new Date().toDateString(); //초기에 한번 계산
	console.log(date);
	return (
		<div className="Header">
			<h3>오늘은⭕</h3>
			<h1>{date}</h1>
		</div>
	);
};

memo(Header);

export default memo(Header);
