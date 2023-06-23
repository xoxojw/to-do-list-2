import uuid from "react-uuid";

// Ducks 패턴이란?
// 1. Reducer 함수를 export default 한다.
// 2. Action Creator 함수들을 export 한다.
// 3. Action type은 app/reducer/ACTION_TYPE 형태로 작성한다.
// => 그래서 모듈 파일 1개에 Action type, Action Creator, Reducer가 모두 존재하는 작성 방식

// -------------------------------------------------------

// Action
// 2개의 input - 1. type, 2. payload
// type의 처리를 payload만큼 해준다

// Action values
// human error를 줄이기 위해서 action type을 변수화해주는 것
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

// state의 초기 상태값
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

// Reducer
// 2개의 input - 1. state, 2. action
// output - 새로운 store
// export 해서 configStore의 combineReducers의 목록에 넣어주기
export const todos = (state = initialState, action) => {
  // if문 또는 switch문으로 액션을 지정
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