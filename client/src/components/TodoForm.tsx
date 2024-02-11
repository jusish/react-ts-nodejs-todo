// TodoForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/actions";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addTodo(formData));

    setFormData({
      title: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <p className="mb-4 text-2xl text-blue-500">Add Todo</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="p-2 m-2 border border-gray-400 border-solid rounded-sm"
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="Start Date"
            required
            className="p-2 m-2 border border-gray-400 border-solid rounded-sm"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="End Date"
            required
            className="p-2 m-2 border border-gray-400 border-solid rounded-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
