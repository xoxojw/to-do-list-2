// configStore.js -> 중앙 데이터 관리소(store)를 설정하는 파일
import { createStore } from "react-redux";
import { combineReducers } from "react-redux";

// rootReducer: reducer들을 모아서 하나로 만들어 놓은 기본 reducer
const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;