// index.tsx or App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import EditForm from "./components/EditForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={TodoList} />
        <Route path="/add" Component={TodoForm} />
        <Route path="/edit/:id" Component={EditForm} />
      </Routes>
    </Router>
  );
};

export default App;
