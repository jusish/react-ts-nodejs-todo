/* eslint-disable @typescript-eslint/no-explicit-any */

// TodoList.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { GET_TODOS } from "@/store/todo/types";
import axios from "axios";
import { Link } from "react-router-dom";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState<any[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  useEffect(() => {
    const fetchOnRender = async () => {
      const res = await axios.get("http://localhost:5000/todos");
      console.log(res.data);

      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });

      setTodos(res.data);
    };
    fetchOnRender();
  }, [dispatch]);

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted); // Toggle showCompleted state
  };

  // Filter todos based on showCompleted state
  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="mt-24 mb-4 text-5xl font-bold">Todo List</h2>
      <div className="">
        <button
          className="px-3 py-1 m-2 text-white bg-blue-500 rounded"
          onClick={handleShowCompleted}
        >
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button>
        <Link
          to={"/add"}
          className="px-3 py-1 m-2 text-white bg-blue-500 rounded"
        >
          Add Todo
        </Link>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 p-10">
        {filteredTodos.map((todo: any) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
