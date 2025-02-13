import React from "react";
import style from "./createTodo.module.css";
const CreateTodo = (prop) => {
  let { todo, handleTodo, createTodo } = prop;

  return (
    <div id={style.createTodo}>
      <form onSubmit={createTodo}>
        <h2>Create Todo</h2>
        <div>
          <input
            type="text"
            placeholder="todo...."
            value={todo}
            onChange={handleTodo}
          />

          <button>create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
