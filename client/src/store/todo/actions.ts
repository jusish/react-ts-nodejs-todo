import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  TodoActionTypes,
  GET_TODOS,
  ADD_TODO,
  //   UPDATE_TODO,
  //   DELETE_TODO,
  //   MARK_COMPLETED,
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
    console.error("Error Fetching Todos:", error);
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

export const deleteTodos =
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
