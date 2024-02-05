import { TodoState, TodoActionTypes, GET_TODOS, ADD_TODO } from "./types";

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
