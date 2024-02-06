export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export interface Todo {
  _id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

interface GetTodosAction {
  type: typeof GET_TODOS;
  payload: Todo[];
}

interface AddTodosAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodosAction {
  type: typeof DELETE_TODO;
  payload: string;
}

interface UpdateTodosAction {
  type: typeof UPDATE_TODO;
  payload: Todo;
}

interface MarkCompletedAction {
  type: typeof MARK_COMPLETED;
  payload: string;
}

export type TodoActionTypes =
  | GetTodosAction
  | AddTodosAction
  | DeleteTodosAction
  | UpdateTodosAction
  | MarkCompletedAction;
