import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AddForm from "components/AddForm";
import TodoList from "components/TodoList";

const Home = () => {
  const todos = useSelector((state) => state);
  console.log(todos);

  return (
    <>
    <header style={headerStyle}>헤더영역</header>
    <main>
      <AddForm />
      <TodoList />
    </main>
    <footer style={footerStyle}>푸터영역</footer>
    </>
  )
}

export default Home;

const headerStyle = {
  backgroundColor: "salmon",
  padding: "10px"
}

const footerStyle = {
  backgroundColor: "skyblue",
  padding: "10px"
}