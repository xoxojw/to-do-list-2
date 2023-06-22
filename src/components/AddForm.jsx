import { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { add_todo } from "redux/modules/actions";


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
      <h2>to-do input 영역</h2>
      <form onSubmit={onSubmitHandler}>
          <input
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={(event) => { setTitle(event.target.value); }}
            required
        />
          <input
            name="content"
            type="text"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(event) => { setContent(event.target.value); }}
            required
        />
        <button>제출</button>
      </form>
    </section>
    </>
  )
}

export default AddForm;