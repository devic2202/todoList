import * as types from "./types";
import produce from 'immer';

const initialState = {
    user: null,
    isAuthenticated: false,
};

const reducer = produce((state = initialState, {type, data}) => {
  switch (type) {
    case types.LOG_IN:
      if(data.data.doc.token){
        localStorage.setItem("user", JSON.stringify(data));
      }
      state.isAuthenticated = true;
      state.user = data;
        return;
        
    case types.LOG_OUT:
      localStorage.removeItem("user");
      state.user = null;
      state.isAuthenticated = false;
      return;
    default:
      return state;
  }
}, initialState); 
 
export default reducer;
