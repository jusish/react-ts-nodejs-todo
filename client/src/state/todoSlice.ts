import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";

interface Todo {
  _id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },

    updateTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    },

    markCompleted(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload ? { ...todo, completed: true } : todo
      );
    },
  },
});

export const { getTodos, addTodo, deleteTodo, updateTodo, markCompleted } =
  todoSlice.actions;

export const selecteTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer
