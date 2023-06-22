import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const todoId = location.pathname.slice(1);

  const { todos } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === todoId);
  console.log(todo);

  return (
    <div>
      <button onClick={() => navigate("/")}>이전으로</button>
      <h2>Todo 상세 정보</h2>
      <p>ID: {todoId}</p>
      <p>제목: {todo.title}</p>
      <p>내용: {todo.content}</p>
      <p>완료여부: {todo.isDone ? "완료" : "진행중"}</p>
    </div>
  );
};

export default Details;
