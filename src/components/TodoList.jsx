import React from 'react'
import { useSelector } from "react-redux";

import TodoItem from "components/TodoItem";

const TodoList = () => {
  // const todos = (X)
  // const { todos } = (O)
  const { todos } = useSelector((state) => state.todos);
  return (<>
    {/* TypeError: Cannot read property 'map' of undefined 오류 발생 */}
    {/* 해결방법 : https://tlsdnjs12.tistory.com/56 */}
    {todos && todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </>)
}

export default TodoList