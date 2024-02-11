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
    const res = await axios.get("http://localhost:5000/todos");
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
      const res = await axios.post("http://localhost:5000/todos", todoData);
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
      window.location.reload(); // Refresh the page after adding a todo
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

export const updateTodo =
  (todoData: Todo) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/todos/${todoData._id}`,
        todoData
      );
      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error updating todo:", error);
      // Handle error as needed
    }
  };

export const deleteTodo =
  (todoId: string) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${todoId}`);
      dispatch({
        type: DELETE_TODO,
        payload: todoId,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

export const markCompleted =
  (todoId: string) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/todos/${todoId}/completed`
      );
      dispatch({
        type: MARK_COMPLETED,
        payload: res.data,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error marking todo as completed:", error);
    }
  };
