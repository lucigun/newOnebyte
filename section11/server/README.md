# Todo 백엔드 서버

이 서버는 Todo 애플리케이션의 백엔드 API를 제공합니다. MongoDB를 사용하여 Todo 항목을 저장하고 관리합니다.

## 설치 및 실행 방법

### 필수 조건

- Node.js
- MongoDB (로컬 또는 MongoDB Atlas)

### 설치

```bash
npm install
```

### 환경 변수 설정

`.env` 파일에 다음 환경 변수를 설정하세요:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
```

### 서버 실행

개발 모드로 실행:

```bash
npm run dev
```

프로덕션 모드로 실행:

```bash
npm start
```

## API 엔드포인트

### Todo 목록 가져오기

- GET `/api/todos`

### 새 Todo 생성하기

- POST `/api/todos`
- 요청 본문: `{ "content": "할 일 내용" }`

### Todo 상태 업데이트 (완료/미완료)

- PATCH `/api/todos/:id`

### Todo 삭제하기

- DELETE `/api/todos/:id`
