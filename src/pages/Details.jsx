import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const todoId = location.pathname.slice(1);

  const { todos } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === todoId);
  console.log(todo);

  return (
    <StDetailBoxContainer>
      <StDetailBox>
        <StHomeButton onClick={() => navigate("/")}>이전으로</StHomeButton>
        <StIdText>ID - {todoId}</StIdText>
        <StDetailTitle>Todo 상세 정보</StDetailTitle>
        <StDetailTodoTitle>제목: {todo.title}</StDetailTodoTitle>
        <StDetailTexts>내용: {todo.content}</StDetailTexts>
        <StDetailTexts>완료여부: {todo.isDone ? "완료 ✨" : "진행중 🔥"}</StDetailTexts>
      </StDetailBox>
    </StDetailBoxContainer>
  );
};

export default Details;

const StDetailBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 50vh;
  min-height: 50vh;
  border-radius: 20px;
  background-color: rgba(166, 182, 194, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.2);
`;

const StHomeButton = styled.button`
  position: absolute;
  top: 0;
  margin: 2vh;
  border: none;
  width: 6em;
  height: 2.5em;
  border-radius: 10px;
  cursor: pointer;
  background-color: #c19898;
	color: var(--main-font-color);
`

const StIdText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 3vh 2vh 3vh 3vh;
  font-size: 0.8rem;
`

const StDetailTitle = styled.h2`
  padding: 2vh;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;


const StDetailTodoTitle = styled.h3`
  padding: 2vh;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`

const StDetailTexts = styled.p`
  padding: 2vh;
  text-align: center;
`;