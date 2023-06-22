import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { delete_todo } from "redux/modules/actions";

const TodoItem = ({ todo }) => {
  const todos = useSelector((state) => state.todos)
  console.log(todos);
  const dispatch = useDispatch();

  const { id, title, content, isDone } = todo;

  const onDeleteButtonClickHandler = () => {
    dispatch(delete_todo(id));
  }

  return (
    <section>
      <p>상세보기</p>
      <p>{title}</p>
      <button onClick={onDeleteButtonClickHandler}>
        삭제
      </button>
    </section>
  )
}

export default TodoItem;