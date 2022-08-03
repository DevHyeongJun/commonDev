import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  current : 'project'
};

function isPendingAction(action) {
  return action.type.endsWith('/pending')
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state = initialState, action) => {
      state.current = action.payload;
    },
    getPage : (state = initialState) => { return state.page}
  },
});

export const pageActions = pageSlice.actions;


export default pageSlice.reducer;