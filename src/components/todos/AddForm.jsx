import { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { add_todo } from "redux/modules/todos";
import styled from "styled-components";


const AddForm = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  // dispatch
  // store의 내장함수로 action(type, payload)을 reducer에게 전달하여 action을 발생시키도록 하는 것
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

    // 과제 할 때, const [title, setTitle] = useState(""); / const [content, setContent] = useState(""); 로 title과 content의 state를 각각 설정하고,
    // setTitle("");
    // setContent(""); 마지막에 이렇게 두 개를 입력해줬는데 input이 초기화되지 않았음
    // ❓onSubmitHandler 함수로 따로 작성할 때와, form onSubmit에 직접 함수로 작성할 때가 다른 것인지?
    setInputs({
      title: "",
      content: "",
    })
  };

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  
  return (
    <>
    <section>
      <StForm onSubmit={onSubmitHandler}>
          <StInput
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onChangeHandler}
            required
        />
          <StInput
            name="content"
            type="text"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={onChangeHandler}
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