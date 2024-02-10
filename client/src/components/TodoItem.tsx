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
    <div className="mb-10 bg-slate-900 max-w-[500px] p-10 rounded-lg">
      <div className="">
        <h3 className={todo.completed ? "line-through" : ""}>{todo.title}</h3>
        <p>Start Date: {todo.startDate.toString()}</p>
        <p>End Date: {todo.endDate.toString()}</p>
      </div>
      <div>
        {!todo.completed && (
          <button
            className="px-3 py-1 mr-2 text-white bg-green-500 rounded"
            onClick={handleCompleteClick}
          >
            Complete
          </button>
        )}
        <button
          className="px-3 py-1 text-white bg-red-500 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
