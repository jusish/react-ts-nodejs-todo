// TodoItems.tsx
import React from "react";
import { Todo } from "../store/todo/types";
import { useDispatch } from "react-redux";
import { deleteTodo, markCompleted } from "../state/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

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
