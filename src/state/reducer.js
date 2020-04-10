import * as types from "./types";
import TodoApp from "../components/TodoApp";
const initialState = {
  todos: [],
  itemIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
              index: action.index,
              done: false,
          }
        ]
      };
    case types.REMOVE_TODO:
      TodoApp.removeItem(state.itemIndex);
      return;
    case types.MARKDONE_TODO:
      TodoApp.markTodoDone(state.itemIndex);
      return;
    default:
      return state;
  }
};

export default reducer;
