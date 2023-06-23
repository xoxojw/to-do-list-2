import React from "react";

import AddForm from "components/todos/AddForm";
import TodoList from "components/todos/TodoList";

import styled from "styled-components";
import Header from "components/ui/Header";

const Home = () => {
  return (
    <>
      <Header />
        <StMain>
          <AddForm />
          <TodoList />
        </StMain>
      <StFooter>내일배움캠프 React 6기 To-do List 과제2</StFooter>
    </>
  )
}

export default Home;

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