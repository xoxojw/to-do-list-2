import React from "react";
import { useSelector } from "react-redux";

import AddForm from "components/AddForm";
import TodoList from "components/TodoList";

import styled from "styled-components";

const Home = () => {
  const todos = useSelector((state) => state);
  console.log(todos);

  return (
    <>
    <StHeader><StTitle>My To-do List</StTitle></StHeader>
    <main>
      <AddForm />
      <TodoList />
    </main>
    <StFooter>내일배움캠프 React 6기 To-do List 과제2</StFooter>
    </>
  )
}

export default Home;

const StHeader = styled.header`
  background-color: salmon;
  padding: 30px;
`

const StTitle = styled.h1`
  font-size: 2rem;
`

const StFooter = styled.footer`
  background-color: skyblue;
  padding: 30px;
  `;