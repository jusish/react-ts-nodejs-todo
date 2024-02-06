import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./store/todo/actions";
import { AppDispatch } from "./store/todo/types"; // Assuming your types file path is correct

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <div className="App">{/* Your components go here */}</div>;
};

export default App;
