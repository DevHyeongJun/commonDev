import { MOD_PAGE } from "../const/action-type";
  
const initialState = {
  page: 'project'
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case MOD_PAGE:
        return { ...state, page: action.payload };
    default:
      return state;
  }
  
};

export default rootReducer;