import * as types from "./types";
const initialState = {
    user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
        localStorage.setItem("user", JSON.stringify(data));
        
        return {...state, user: action
        }
        
    case types.LOG_OUT:
      
      return ;
    case types.GET_USER:
      return ;
    default:
      return state;
  }
};
 
export default reducer;
