import { createStore  } from "redux";
import rootReducer from "../reducers/index";

//createStore 아마도 이게 변경된 듯..ㅡㅡ
const store = createStore(rootReducer );

export default store;