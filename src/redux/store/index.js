import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pageReducer from "../reducers/pageSlice";

/**
 * 스토어 공통 관리.
 * 
 */
const rootReducer = combineReducers({
    page: pageReducer,
});

//리덕스 요청 간의 각 처리가 가능하다.
const customMiddleware = (storeApi) => {
    return (next) => {
      return (action) => {
        return next(action);
      };
    };
};

//ㅍㅔㅇㅣㅈㅣㅅㅡㅌㅗㅇㅓㄹㅡㄹ ㅜㅇㅣㅎㅏㄴ  
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),//리덕스 요청 간의 트랜잭션 처리가 가능하다.
    devTools: false,//개발자 도구 쓸거냐 안쓸거냐. 안쓴다. 
});

export {store};