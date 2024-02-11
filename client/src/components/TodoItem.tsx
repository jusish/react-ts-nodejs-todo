// TodoItems.tsx
import React, { Dispatch } from "react";
import { Todo, TodoActionTypes } from "../store/todo/types";
import { useDispatch } from "react-redux";
import { markCompleted } from "../state/todoSlice";
import axios from "axios";
import { DELETE_TODO } from "../store/todo/types";

interface TodoItemProps {
  todo: Todo;
}

const deleteTodo =
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

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(markCompleted(todo._id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <div
      className={
        todo.completed
          ? "  text-gray-50  mb-10 bg-slate-900 max-w-[500px] p-10 rounded-lg"
          : " text-gray-50  mb-10 bg-slate-900 max-w-[500px] p-10 rounded-lg"
      }
    >
      <div className="gap-10">
        <h3
          className={
            todo.completed
              ? " text-white line-through mb-5"
              : " text-gray-50 mb-5"
          }
        >
          {todo.title}
        </h3>
        <div className="mb-5 text-gray-300">
          <p>Start Date: {todo.startDate.toString()}</p>
          <p>End Date: {todo.endDate.toString()}</p>
        </div>
      </div>
      <div>
        {!todo.completed && (
          <div>
            <button
              className="px-3 py-1 m-2 text-white bg-green-500 rounded"
              onClick={handleCompleteClick}
            >
              Complete
            </button>
            <button className="px-3 py-1 m-2 text-white bg-blue-500 rounded">
              edit
            </button>
          </div>
        )}
        <button
          className="px-3 py-1 m-2 text-white bg-red-500 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
