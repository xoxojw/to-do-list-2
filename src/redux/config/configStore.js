// configStore.js -> 중앙 데이터 관리소(store)를 설정하는 파일
import { createStore } from "redux";
import { combineReducers } from "redux";

import { todos } from "redux/modules/todos";

// rootReducer: reducer들을 모아서 하나로 만들어 놓은 기본 reducer
const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;