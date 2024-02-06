import {
  TodoState,
  TodoActionTypes,
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  MARK_COMPLETED,
} from "./types";

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

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };

    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload ? { ...todo, completed: true } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
