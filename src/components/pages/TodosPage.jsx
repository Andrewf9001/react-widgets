import { useState } from "react";

const TodosPage = () => {
  const [todo, setTodo] = useState();

  return (
    <div className="todo-page-container">
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
};

export default TodosPage;
