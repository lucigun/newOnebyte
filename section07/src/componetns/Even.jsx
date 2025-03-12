import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect에서 콜백함수를 반환하는 경우 클린업, 정리함수라고 함
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>"짝수입니다"</div>;
};

export default Even;
