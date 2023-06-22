import React from 'react'

const TodoList = ( { todos, setTodos } ) => {
  return (
    <>
      <section>
          <h2>진행 중 리스트</h2>
          {todos.filter((todo) => todo.isDone === false).map((todo) => {
            return (
              <div style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button onClick={() => {
                  const filteredTodos = todos.filter(
                    selectedTodo => selectedTodo.id !== todo.id
                  )
                  setTodos(filteredTodos);
                }}>삭제</button>
                <button onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  })
                  setTodos(newTodos);
              }}>완료</button>
              </div>
            )
          })}
        </section>
        <section>
          <h2>완료 리스트</h2>
          {todos.filter((todo) => todo.isDone === true).map((todo) => {
            return (
              <div style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button onClick={() => {
                  const filteredTodos = todos.filter(
                    selectedTodo => selectedTodo.id !== todo.id
                  )
                  setTodos(filteredTodos);
                }}>삭제</button>
                <button onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  })
                  setTodos(newTodos);
              }}>진행중</button>
              </div>
            )
          })}
        </section>
    </>
  )
}

export default TodoList