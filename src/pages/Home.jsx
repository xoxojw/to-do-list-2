import React from "react";

import AddForm from "components/AddForm";
import TodoList from "components/TodoList";

import styled from "styled-components";

const Home = () => {
  const today = new Date();
  const weekday = ['일', '월', '화', '수', '목', '금', '토']

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = weekday[today.getDay()];
  return (
    <>
      <StHeader>
        <StTitle>My To-do List</StTitle>
        <p className="header-date">{year}년 {month}월 {date}일 {day}요일</p>
      </StHeader>
        <StMain>
          <AddForm />
          <TodoList />
        </StMain>
      <StFooter>내일배움캠프 React 6기 To-do List 과제2</StFooter>
    </>
  )
}

export default Home;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid salmon;

  padding: 2vh;
`

const StTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
`

const StMain = styled.main`
  max-width: 120vh;
  min-width: 100vh;
  min-height: 83vh;
  margin: 2vh auto;
  border-radius: 20px;
  background-color: rgba(166, 182, 194, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.2);
`

const StFooter = styled.footer`
  padding: 10px;
  margin: 20px 0 20px 0;
  `;