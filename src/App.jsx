import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";
import React, { useState } from "react";
import uuid from "react-uuid";

const headerStyle = {
  backgroundColor: "salmon",
  padding: "10px"
}

const footerStyle = {
  backgroundColor: "skyblue",
  padding: "10px"
}

const App = () => {
  const initialState = [
    {
      id: uuid(),
      title: "저녁에 헬스장 가기",
      content: "웨이트 운동 30분 꼭 하기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트 숙제 하기",
      content: "to-do list 만들기",
      isDone: true,
    }
  ]
  const [todos, setTodos] = useState(initialState);

  return (
    <>
    <header style={headerStyle}>헤더영역</header>
    <main>
    <AddTodo todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
    </main>
    <footer style={footerStyle}>푸터영역</footer>
    </>
  )
}

export default App