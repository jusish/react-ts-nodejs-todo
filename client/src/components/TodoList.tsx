import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="  justify-center flex items-center">
      <h1 className=" text-red-500">Available todos</h1>
      <div>
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
