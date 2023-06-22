// Action values
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const ISDONE_TODO = "ISDONE_TODO";

// Action Creator
export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: todo.id,
      title: todo.title,
      content: todo.content,
      isDone: todo.isDone
    },
  };
};

export const delete_todo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const isdone_todo = (isDone) => {
  return {
    type: ISDONE_TODO,
    isDone,
  };
};
