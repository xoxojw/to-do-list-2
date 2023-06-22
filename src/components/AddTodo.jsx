import { useState } from 'react';
import uuid from "react-uuid";


const AddTodo = ({todos, setTodos}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
    <section>
      <h2>to-do input 영역</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const newTodo = {
          id: uuid(),
          title,
          content,
          isDone: false,
        }
        setTodos([...todos, newTodo])
      }}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(event)=>{setTitle(event.target.value)}}
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(event) => { setContent(event.target.value); }}
        />
        <button>제출</button>
      </form>
    </section>
    </>
  )
}

export default AddTodo