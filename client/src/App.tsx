import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./store/todo/actions";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <div>This is the component</div>;
};


export default App;