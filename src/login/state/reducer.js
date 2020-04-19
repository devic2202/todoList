import * as types from "./types";
const initialState = {
    user: {},
    isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
        localStorage.setItem("user", JSON.stringify(action));
        return {...state, user: action,
          isAuthenticated : true,
        }
        
    case types.LOG_OUT:
      localStorage.removeItem("user");
      return {...state, user: null,
        isAuthenticated : false,
      }
    case types.GET_USER:
      return ;
    default:
      return state;
  }
};
 
export default reducer;
