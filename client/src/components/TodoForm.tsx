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

  return (
    <div className="flex flex-col max-w-[500px] items-center justify-center">
      <p className="items-center text-2xl text-blue-500">Add Todo</p>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="p-2 m-2 border border-solid rounded-sm border-gray"
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          placeholder="Start Date"
          required
          className="p-2 m-2 border border-solid rounded-sm border-gray"
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          placeholder="End Date"
          required
          className="p-2 m-2 border border-solid border-gray"
        />
        <button
          type="submit"
          className="px-3 py-1 m-2 text-white bg-blue-500 rounded"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
