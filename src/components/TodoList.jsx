import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { delete_todo } from "redux/modules/actions";

const TodoList = () => {
  // const todos = (X)
  // const { todos } = (O)
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const onDeleteButtonClickHandler = () => {
    dispatch(delete_todo(id));
  }
    
  return (<>
    {/* TypeError: Cannot read property 'map' of undefined 오류 발생 */}
    {/* 해결방법 : https://tlsdnjs12.tistory.com/56 */}
    {todos && todos.map((todo) => {
      return (
        <div key={todo.id}>
          {todo.title}
        </div>
      )
    })}
  </>)
}

export default TodoList;