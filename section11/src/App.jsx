import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
  useEffect,
} from "react";
import {
  fetchTodos,
  createTodo,
  updateTodoStatus,
  deleteTodo,
} from "./services/todoService";

// 초기 데이터는 빈 배열로 설정하고 API에서 가져옵니다
const initialData = [];

function reudcer(state, aciton) {
  switch (aciton.type) {
    case "CREATE":
      return [aciton.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item._id === aciton.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item._id !== aciton.targetId);
    case "SET_TODOS":
      return aciton.data;
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reudcer, initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const idRef = useRef(3);

  // 컴포넌트 마운트 시 Todo 목록 가져오기
  useEffect(() => {
    const loadTodos = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTodos();
        dispatch({ type: "SET_TODOS", data });
        setError(null);
      } catch (err) {
        console.error("Todo 목록 가져오기 실패:", err);
        setError("Todo 목록을 가져오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  const onCreate = useCallback(async (content) => {
    try {
      const newTodo = await createTodo(content);
      dispatch({
        type: "CREATE",
        data: newTodo,
      });
    } catch (err) {
      console.error("Todo 생성 실패:", err);
      setError("Todo 생성에 실패했습니다.");
    }
  }, []);

  const onUpdate = useCallback(async (targetId) => {
    try {
      await updateTodoStatus(targetId);
      dispatch({
        type: "UPDATE",
        targetId: targetId,
      });
    } catch (err) {
      console.error("Todo 상태 업데이트 실패:", err);
      setError("Todo 상태 업데이트에 실패했습니다.");
    }
  }, []);

  const onDelete = useCallback(async (targetId) => {
    try {
      await deleteTodo(targetId);
      dispatch({
        type: "DELETE",
        targetId: targetId,
      });
    } catch (err) {
      console.error("Todo 삭제 실패:", err);
      setError("Todo 삭제에 실패했습니다.");
    }
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, [onCreate, onUpdate, onDelete]);

  return (
    <div className="App">
      <Header />

      <TodoStateContext.Provider value={{ todos, isLoading, error }}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
