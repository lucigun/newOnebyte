import "./App.css";
import Viewer from "./componetns/Viewer";
import Controller from "./componetns/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./componetns/Even";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };
  //리액트 state는 비동기로 진행

  const [input, setInput] = useState("");
  const isMount = useRef(false);

  //1. 마운트 : 탄생
  // 최초 호출이후 사용하지 않는 경우 [] 빈배열을 이용한다.
  useEffect(() => {
    console.log("마운트");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // 업데이트마다 계속 호출됨
  // 컴퍼넌트가 업데이트되어야 리렌더링되게 하려고하면 useRef를 사용해야하고
  // isMount라는 변수값에 useRef(false)를 기본으로 설정하고
  // useEffect 내부에서 isMount의 변수의 현재 값을 강제로 true로 변화 시킨 이후에 동작하게끔해야한다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("업데이트");
  });

  // 3. 언마운트 : 소멸

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
