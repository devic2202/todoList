import * as types from "./types";
const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return ;
    case types.LOG_OUT:
      
      return ;
    case types.GET_USER:
      return ;
    default:
      return state;
  }
};

export default reducer;
