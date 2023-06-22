import uuid from "react-uuid";
import { ADD_TODO, DELETE_TODO, ISDONE_TODO } from "redux/modules/actions";

const initialState = {
  todos: [
    {
      id: uuid(),
      title: "저녁에 헬스장 가기",
      content: "웨이트 운동 30분 꼭 하기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트 숙제 하기",
      content: "to-do list 만들기",
      isDone: true,
    },
  ],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state,
        todos: [...state.todos, action.todo],
      };
    
    case DELETE_TODO:
      return {...state, 
        todos: [...state.todos.filter((todo)=>todo.id !== action.id)],
      };
    
    case ISDONE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.isDone) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        })
      };      
      
    default:
      return state;
  }
 };