import {createSlice} from '@reduxjs/toolkit';

/**
 * 액션과 함께 정의된다.
 * 
 *  -payload 는 action의 콜백 함수 개념이다.
 *  -redux의 store로 "종속"된다.
 *  -redux clice는  ducks-pattern을 지원하기 위한 라이브러리 이다.
 */

//reducer를 호출할 key
const reducerKey = 'page';

//state 정의
const initialState = {
  current : 'project'
};

//액션 정의
//너무 길어질 경우에는 별도 js로 빼는 것도 좋아보이나,
//애초에 그렇게 짜면 나중에 매우매우 복잡해짐.....
const actions = {
    setPage: (state = initialState, action) => {
      state.current = action.payload;
    },
    getPage : (state = initialState) => { return state.page}
}

const pageSlice = createSlice({
  name: reducerKey,
  initialState,
  reducers: actions,
});

export const pageActions = pageSlice.actions; //사용 용
export default pageSlice.reducer;//store 등록 용