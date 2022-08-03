
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pageReducer from "../reducers/pageSlice";


const rootReducer = combineReducers({
    page: pageReducer,
});

const customMiddleware = (storeApi) => {
    return (next) => {
      return (action) => {
        // 개발자는 이곳에 자신의 목적에 알맞은 코드를 추가할 수 있습니다.
        // ...
  
        return next(action);
      };
    };
};

//ㅍㅔㅇㅣㅈㅣㅅㅡㅌㅗㅇㅓㄹㅡㄹ ㅜㅇㅣㅎㅏㄴ  
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
    devTools: false,//ㄹㅣㄷㅓㄱㅅㅡ ㄱㅐㅂㅏㄹㅈㅏ ㄷㅗㄱㅜ
    //preloadedState
});

export {store};