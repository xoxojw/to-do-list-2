import { useSelector, useDispatch } from "react-redux";
import { delete_todo, isdone_todo } from "redux/modules/actions";
import { Link } from "react-router-dom";

import styled from "styled-components";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const ingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  // dispatch: Action을 Reducer에게 전달
  const onDeleteButtonClickHandler = (id) => {
    dispatch(delete_todo(id));
  };

  const onToggleButtonClickHandler = (id) => {
    dispatch(isdone_todo(id));
  };

  return (
    <StSection>
      <h2>진행 중 🔥</h2>
      {ingTodos.map((todo) => {
        return (
          <StTodoContainer key={todo.id}>
          <Link to={`/${todo.id}`}>상세보기</Link>
            <h3>{todo.title}</h3>
            <button onClick={() => onDeleteButtonClickHandler(todo.id)}>
              삭제
            </button>
            <button onClick={() => onToggleButtonClickHandler(todo.id)}>
              {todo.isDone ? "진행 중.." : "완료!"}
            </button>
          </StTodoContainer>
        );
      })}

      <h2>완료 ✨</h2>
        {doneTodos.map((todo) => {
          return (
            <StTodoContainer key={todo.id}>
            <Link to={`/${todo.id}`}>상세보기</Link>
              <h3>{todo.title}</h3>
              <button onClick={() => onDeleteButtonClickHandler(todo.id)}>
                삭제
              </button>
              <button onClick={() => onToggleButtonClickHandler(todo.id)}>
                {todo.isDone ? "진행 중.." : "완료!"}
              </button>
            </StTodoContainer>
          );
        })}
    </StSection>
  );
}

export default TodoList;

const StSection = styled.section`
  width: 95%;
`;

const StTodoContainer = styled.div`
  max-width: 30vh;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`

