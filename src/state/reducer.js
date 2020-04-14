import * as types from "./types";
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
            index: state.itemIndex + 1,
            value: action.item,
            done: false,
          },
        ],
        itemIndex: state.itemIndex + 1,
      };
    case types.REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.index !== action.index),
      };
    case types.MARKDONE_TODO:
      return {
        todos: state.todos.map(todo =>
          (todo.index === action.index)
            ?{...todo,done: !todo.done}
            : todo 
        ),
      };
    default:
      return state;
  }
};

export default reducer;
