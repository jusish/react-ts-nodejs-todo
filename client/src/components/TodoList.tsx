// TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { TodoState } from "@/store/todo/types";

const TodoList: React.FC = () => {
  
  const todos = useSelector((state : TodoState) => state.todos);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Todo List</h2>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
