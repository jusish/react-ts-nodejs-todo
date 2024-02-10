// index.tsx or App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={TodoList} />
        <Route path="/add" Component={TodoForm} />
      </Routes>
    </Router>
  );
};

export default App;
