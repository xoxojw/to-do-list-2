import { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { add_todo } from "redux/modules/actions";
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
    <StForm>
      <form onSubmit={onSubmitHandler}>
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
      </form>
    </StForm>
    </>
  )
}

export default AddForm;

const StForm = styled.section`
  padding: 5vh;
  text-align: center;
  color: white;
`;

const StInput = styled.input`
  width: 25vh;
  height: 2vh;
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  text-align: center;
  background-color: #e7f5ff;
`;

const StInputButton = styled.button`
  width: 7vh;
  height: 4vh;
  border: 1px solid #e7f5ff;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;