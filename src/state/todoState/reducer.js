import * as types from "./types";
const initialState = {
  todos: [],
  index: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            index: state.index + 1,
            value: action.item,
            done: false,
          },
        ],
        index: state.index + 1,
      };
    case types.REMOVE_TODO:
      const newTodo = [...state.todos];
      newTodo.splice(action.index, 1);
      return { todos: newTodo, index: state.index };
    case types.MARKDONE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.index === action.index ? { ...todo, done: !todo.done } : todo
        ),
        index: state.index,
      };
    default:
      return state;
  }
};

export default reducer;
