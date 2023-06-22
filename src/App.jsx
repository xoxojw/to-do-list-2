import { useSelector } from "react-redux";

import AddForm from "components/AddForm";
import TodoList from "components/TodoList";

const headerStyle = {
  backgroundColor: "salmon",
  padding: "10px"
}

const footerStyle = {
  backgroundColor: "skyblue",
  padding: "10px"
}

const App = () => {
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

export default App;