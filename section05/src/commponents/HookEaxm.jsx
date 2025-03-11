// 3가지 hook 팁
// 1. 함수 컴퍼넌트, 커스텀 훅 내에서만 호출 가능
// 2. 조건부로 호출될 수 없다.(조건문, 반복문 내 사용 불가 )
// 3. 커스텀 훅 직접 생성 가능

import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <br />
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
