import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      {
        /* 입력하지 않은 경우 입력창에 포커스 될 수 있게*/
      }
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    console.log(content);
    setContent("");
    {
      /* 입력후 입력창 clear */
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log("엔터입력됨");
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운투두"
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
