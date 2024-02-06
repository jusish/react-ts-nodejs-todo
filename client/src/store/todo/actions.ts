import { Dispatch } from "redux";
import axios from "axios";
import {
  TodoActionTypes,
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_COMPLETED,
  Todo,
} from "./types";

export const getTodos = () => async (dispatch: Dispatch<TodoActionTypes>) => {
  try {
    const res = await axios.get("/todos");
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const addTodo =
  (todoData: Todo) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const res = await axios.post("/todos", todoData);
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

export const updateTodo =
  (todoData: Todo) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const res = await axios.put(`/todos/${todoData._id}`, todoData);
      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error updating todo:", error);
      // Handle error as needed
    }
  };

export const deleteTodo =
  (todoId: string) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      await axios.delete(`/todos/${todoId}`);
      dispatch({
        type: DELETE_TODO,
        payload: todoId,
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
      // Handle error as needed
    }
  };

export const markCompleted =
  (todoId: string) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const res = await axios.put(`/todos/${todoId}/completed`);
      dispatch({
        type: MARK_COMPLETED,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error marking todo as completed:", error);
      // Handle error as needed
    }
  };