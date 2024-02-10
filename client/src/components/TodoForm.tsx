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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="End Date"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
