import { useSelector, useDispatch } from "react-redux";
import { delete_todo, isdone_todo } from "redux/modules/todos";
import { Link } from "react-router-dom";

import styled from "styled-components";

const TodoList = () => {
  // useSelector : store에서 state 값을 반환
  // useSelector를 사용한 함수에서 store의 상태값이 바뀐 경우에
  // (버튼 클릭 등의 이벤트를 통해 action이 실행되어 state값이 변경된 경우)
  // 바뀐 store의 state값을 다시 가져와서 컴포넌트를 리렌더링한다
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
      <StListTodos>
        <StListTitle>진행 중 🔥</StListTitle>
        <StTodoWrapper>
        {ingTodos.map((todo) => {
          return (
            <StTodoBox key={todo.id}>
            <StyledLink to={`/${todo.id}`}>상세보기</StyledLink>
              <StTodoTitle>{todo.title}</StTodoTitle>
              <StDeleteButton onClick={() => onDeleteButtonClickHandler(todo.id)}>
                삭제
              </StDeleteButton>
              <StStatusButton onClick={() => onToggleButtonClickHandler(todo.id)}>
                {todo.isDone ? "진행 중.." : "완료!"}
              </StStatusButton>
            </StTodoBox>
          );
        })}
        </StTodoWrapper>
      </StListTodos>
      <StListTodos>
       <StListTitle>완료 ✨</StListTitle>
        <StTodoWrapper>
        {doneTodos.map((todo) => {
          return (
            <StTodoBox key={todo.id}>
            <StyledLink to={`/${todo.id}`}>상세보기</StyledLink>
              <StTodoTitle>{todo.title}</StTodoTitle>
              <StDeleteButton onClick={() => onDeleteButtonClickHandler(todo.id)}>
                삭제
              </StDeleteButton>
              <StStatusButton onClick={() => onToggleButtonClickHandler(todo.id)}>
                {todo.isDone ? "진행 중.." : "완료!"}
              </StStatusButton>
            </StTodoBox>
          );
        })}
        </StTodoWrapper>
      </StListTodos>
    </StSection>
  );
}

export default TodoList;

const StSection = styled.section`
  display: inline-block;
`;

const StListTodos = styled.div`
  padding: 1em 2em 1em 2em;
`

const StListTitle = styled.h2`
  display: inline-block;
  font-size: 1.5em;
  padding: 0.5em;
`

const StTodoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 1em;
`

const StTodoBox = styled.div`
  width: 23vh;
  border: 3px solid salmon;
  border-radius: 12px;
  padding: 1.3em;
  position: relative;
  line-height: 2;
`

const StyledLink = styled(Link)`
  display: block;
	color: var(--main-font-color);
	text-align: right;
`;

const StTodoTitle = styled.h3`
  font-size: 1.2em;
  padding: 0.5em;
`

const StDeleteButton = styled.button`
  border: none;
  width: 6em;
  height: 3em;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  background-color: #c19898;
`
const StStatusButton = styled.button`
  border: none;
  width: 6em;
  height: 3em;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  background-color: #a1aed3;
`;
