// configStore.js -> 중앙 데이터 관리소(store)를 설정하는 파일
import { createStore } from "redux";
import { combineReducers } from "redux";

import { todos } from "redux/modules/todos";

// store를 만들기 위해서는 store 내부에 들어갈 모듈, 즉 reducer들이 필요함
// 이 reducer들을 묶기 위한 rootReducer가 필요
// rootReducer를 묶는 API -> combineReducers({Reducer lists});
// Reducer lists -> key-value pair 객체형태

// rootReducer: reducer들을 모아서 하나로 만들어 놓은 기본 reducer
const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;