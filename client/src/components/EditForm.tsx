// EditForm.tsx
import { Todo, TodoActionTypes, UPDATE_TODO } from "@/store/todo/types";
import axios from "axios";
import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";

const EditForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });

  const updateTodo =
    (todoData: Todo) => async (dispatch: Dispatch<TodoActionTypes>) => {
      try {
        const res = await axios.put(
          `http://localhost:5000/todos/${todoData._id}`,
          todoData
        );
        dispatch({
          type: UPDATE_TODO,
          payload: res.data,
        });
        window.location.reload();
      } catch (error) {
        console.error("Error updating todo:", error);
        // Handle error as needed
      }
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateTodo(formData));

    setFormData({
      title: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <p className="mb-4 text-2xl text-blue-500">Update Todo</p>
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
            Update now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
