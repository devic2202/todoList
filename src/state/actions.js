import * as types from "./types";
export const addTodo = (item) => {
    return {
      type: types.ADD_TODO,
      item,
      done : false,
    }
  };
  
  export const removeTodo = (itemIndex) => {
    return {
      type: types.REMOVE_TODO,
      itemIndex,
    }
  };

  export const markdoneTodo = (itemIndex) => {
    return {
      type: types.MARKDONE_TODO,
      itemIndex,
      done : true,
    }
  };