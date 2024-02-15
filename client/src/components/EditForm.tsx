import { Todo, UPDATE_TODO } from "@/store/todo/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditForm: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });
  const [todo, setTodo] = useState<Todo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/todos/${id}`);
        setTodo(res.data);
        setFormData({
          title: res.data.title,
          startDate: res.data.startDate,
          endDate: res.data.endDate,
        });
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/todos/${id}`,
        formData
      );
      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <p className="mb-4 text-2xl text-blue-500">Update Todo</p>
        <div className="m-2">
          <h3 className="mb-2 text-xl font-bold">Current Todo:</h3>
          <p className="mb-2">Title: {todo.title}</p>
          <p className="mb-2">Start Date: {todo.startDate.toString()}</p>
          <p className="mb-2">End Date: {todo.endDate.toString()}</p>
        </div>
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
