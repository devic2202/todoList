import * as types from "./types";
export const addTodo = (item) => {
    return {
      type: types.ADD_TODO,
      item,
      done : false,
    }
  };
  
  export const removeTodo = (index) => {
    return {
      type: types.REMOVE_TODO,
      index,
    }
  };

  export const markTodoDone = (index) => {
    return {
      type: types.MARKDONE_TODO,
      index,
      done : true,
    }
  };