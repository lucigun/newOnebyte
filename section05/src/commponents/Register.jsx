import { useState, useRef } from "react";

// 회원가입폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBrithe] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // 위에 4개를 1개의 state로 관리하는것으로 변경
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  // console.log(input);

  const countRef = useRef(0);
  const inputRef = useRef();

  // 통합이벤트 핸들러
  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };
  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };
  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };
  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input, //스프레드연산자
  //     bio: e.target.value,
  //   });
  // };

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBrithe(e.target.value);
  // };
  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  // setBio, setCount 이런것을 상태변화 함수라고 함
  // const on ChangeBio 이런것을 이벤트 핸들러라고

  return (
    <>
      <div>
        <div>
          <input
            ref={inputRef}
            name="name"
            value={input.name}
            onChange={onChange}
            placeholder={"이름"}
          />
        </div>

        <div>
          <input
            name="birth"
            value={input.birth}
            type="date"
            onChange={onChange}
          />
        </div>

        <div>
          <select name="country" value={input.country} onChange={onChange}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
          {input.country}
        </div>

        <div>
          <textarea name="bio" value={input.bio} onChange={onChange} />
          {input.bio}
        </div>

        <button onClick={onSubmit}>제출</button>
      </div>
    </>
  );
};

export default Register;
