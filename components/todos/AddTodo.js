import { useState } from "react";

import ErrorModal from "../ErrorModal";
import classes from "./AddTodo.module.css";
import AddButton from "../images/AddIcon";

const AddTodo = ({ setTodos, todos }) => {
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;

    if (value.length === 0) {
      setError({ message: "Please enter new task" });
      return;
    }

    const newTodo = {
      title: value,
      id: Math.random().toString(),
      is_completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    const updatedTodosList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem("todos", updatedTodosList);

    event.target.reset();
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler} className={classes.form}>
        <input type="text" name="todo" id="todo" />
        <button>
          <AddButton />
          <span className={classes["visually-hidden"]}>Add</span>
        </button>
      </form>
    </>
  );
};

export default AddTodo;
