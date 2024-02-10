/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { GET_TODOS } from "@/store/todo/types";
import axios from "axios";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);

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

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="mt-24 mb-4 text-5xl font-bold">Todo List</h2>
      <div>
        <button className="px-3 py-1 m-2 text-white bg-blue-500 rounded">
          Show Completed
        </button>
        <button className="px-3 py-1 m-2 text-white bg-blue-500 rounded">
          Add Todo
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 p-10">
        {todos?.map((todo: any) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
