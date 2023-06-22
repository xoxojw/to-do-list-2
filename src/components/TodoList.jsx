import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { delete_todo } from "redux/modules/actions";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onDeleteButtonClickHandler = (id) => {
    dispatch(delete_todo(id));
  };

  return (
    <section>
      {/* TypeError: Cannot read property 'map' of undefined 오류 발생 */}
      {/* 해결방법 : https://tlsdnjs12.tistory.com/56 */}
      {todos.map((todo) => {
        return (
          <>
            <h3 key={todo.id}>{todo.title}</h3>
            <button onClick={() => onDeleteButtonClickHandler(todo.id)}>
              삭제
            </button>
          </>
        );
      })}
    </section>
  );
}

export default TodoList;

