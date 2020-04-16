import * as types from "./types";
export const addTodo = (data = {}) => {
    return {
      type: types.LOG_IN,
      data,
    }
  };
  
  export const logOut = (data = {}) => {
    return {
      type: types.LOG_OUT,
      data,
    }
  };

  export const getUser = (data = {}) => {
    return {
      type: types.GET_USER,
      data,
    }
  };