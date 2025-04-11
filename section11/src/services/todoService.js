// Todo API와 통신하는 서비스 함수들

const API_BASE_URL = `${
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"
}/todos`;

// 모든 Todo 항목 가져오기
export const fetchTodos = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Todo 목록을 가져오는데 실패했습니다.");
    }
    return await response.json();
  } catch (error) {
    console.error("Todo 목록 가져오기 오류:", error);
    throw error;
  }
};

// 새 Todo 항목 생성하기
export const createTodo = async (content) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error("Todo 생성에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("Todo 생성 오류:", error);
    throw error;
  }
};

// Todo 항목 상태 업데이트 (완료/미완료)
export const updateTodoStatus = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Todo 상태 업데이트에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("Todo 상태 업데이트 오류:", error);
    throw error;
  }
};

// Todo 항목 삭제하기
export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Todo 삭제에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("Todo 삭제 오류:", error);
    throw error;
  }
};
