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

      <div className="uncomplete-todos-wrapper">
        <div>Uncompleted Todos</div>
      </div>

      <div className="completed-todos-wrapper">
        <div>Completed todos</div>
      </div>
    </div>
  );
};

export default TodosPage;
