/* eslint-disable @typescript-eslint/no-explicit-any */
// TodoList.tsx
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
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Todo List</h2>
      <div>
        {todos?.map((todo: any) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
