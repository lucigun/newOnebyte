import "./Main.css";

const Main = () => {
    // JSX 주의사항
    // 1. 중괄호 내부에는 자바스크립트 표현식만넣을 수 있다.
    // 2. 숫자, 문자열, 배열 값만 랜더링 된다., boolean, undefined는 렌더링 되지 않음
    // 3. 모든 태그는 닫혀 있어야 한다.
    // 4. 최상위 태그는 반드시 하나여야만 한다. 빈태크도 활용가능 <> </>
    const user = {
        name : "이정환",
        isLogin : false,
    }  ;
    
    // return (
    //     <>
    //     {user.isLogin ? (
    //         <div>로그아웃</div>
    //     ) : (
    //         <div>로그인</div>
    //     )}
    //     </>
    // )

    if(user.isLogin){
        return <div style={{
            color : "red",
            backgroundColor : "black",
            borderBottom : "5px solid blue",
        }
        }>로그아웃</div>;
    } else {
        return <div className="login">로그인</div>;
    }   
};

export default Main ;