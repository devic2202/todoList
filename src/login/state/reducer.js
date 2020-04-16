import * as types from "./types";
const initialState = {
  todos: [],
  index: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
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
    case types.LOG_OUT:
      const newTodo = [...state.todos];
      newTodo.splice(action.index, 1);
      return { todos: newTodo, index: state.index };
    case types.GET_USER:
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
