import { useSelector, useDispatch } from "react-redux";
import { delete_todo } from "redux/modules/actions";

import styled from "styled-components";

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
          <TodoContainer key={todo.id}>
            <h3>{todo.title}</h3>
            <button onClick={() => onDeleteButtonClickHandler(todo.id)}>
              삭제
            </button>
          </TodoContainer>
        );
      })}
    </section>
  );
}

export default TodoList;

const TodoContainer = styled.div`
  max-width: 30vh;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`

