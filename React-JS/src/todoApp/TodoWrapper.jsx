import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import AllTodo from "./AllTodo";

const TodoWrapper = () => {
  let [todo, setTodo] = useState("");
  let [allTodos, setAlltodos] = useState([{ text: "hello", id: 1 }]);

  let handleTodo = (e) => {
    setTodo(e.target.value);
  };

  let createTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      let newTodo = {
        text: todo,
        id: Date.now(),
      };
      console.log(newTodo);
      setAlltodos([...allTodos, newTodo]);
      setTodo("");
    } else {
      alert("empty todo");
    }
  };

  let deleteTodo = (id) => {
    console.log("deleted", id);
    let filteredTodo = allTodos.filter((ele) => {
      return ele.id != id;
    });
    setAlltodos(filteredTodo);
  };

  let editTodo = (id) => {
    console.log("edit", id);
    let editTodo = allTodos.find((ele) => {
      return ele.id === id;
    });
    console.log(editTodo);

    let filteredTodo = allTodos.filter((ele) => {
      return ele.id != id;
    });
    setAlltodos(filteredTodo);

    setTodo(editTodo.text);
  };

  return (
    <div>
      <CreateTodo todo={todo} handleTodo={handleTodo} createTodo={createTodo} />
      <AllTodo
        allTodos={allTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoWrapper;
