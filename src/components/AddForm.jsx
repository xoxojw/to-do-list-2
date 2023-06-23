import { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { add_todo } from "redux/modules/todos";
import styled from "styled-components";


const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      add_todo({
        id: uuid(),
        title,
        content,
        isDone: false,
      })
    );
  };
  
  return (
    <>
    <section>
      <StForm onSubmit={onSubmitHandler}>
          <StInput
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={(event) => { setTitle(event.target.value); }}
            required
        />
          <StInput
            name="content"
            type="text"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(event) => { setContent(event.target.value); }}
            required
        />
        <StInputButton>제출</StInputButton>
      </StForm>
    </section>
    </>
  )
}

export default AddForm;

const StForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh;
`;

const StInput = styled.input`
  width: 20vh;
  height: 2vh;
  padding: 0.5vh;
  margin: 0.5vh;
  border: none;
  border-radius: 10px;
  outline: none;
`;

const StInputButton = styled.button`
  width: 7vh;
  height: 3vh;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-left: 0.5vh;
  background-color: palevioletred;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;