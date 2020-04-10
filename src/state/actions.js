import * as types from "./types";
export const addTodo = (index) => {
    return {
      type: types.ADD_TODO,
      index,
      done: false
    }
  };
  
  export const removeTodo = (itemIndex) => {
    return {
      type: types.REMOVE_TODO,
      itemIndex
    }
  };

  export const markdoneTodo = (itemIndex) => {
    return {
      type: types.MARKDONE_TODO,
      itemIndex
    }
  };