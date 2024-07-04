import { useState, useEffect, useRef } from "react";
import CircleButton from "../images/CircleIcon";
import { DeleteIcon, EditIcon } from "../images/TodoListIcons";

import classes from "./TodoItem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const completeTodoTask = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );

    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const inputChangeHandler = (event) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: event.target.value } : todo
      )
    );
  };

  const inputSubmitHandler = (event) => {
    event.preventDefault();

    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  };

  const inputBlurHandler = () => {
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));

    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
  };

  return (
    <>
      <li id={item?.id} className={classes["todo_item"]}>
        {editing ? (
          <form className={classes["edit-form"]} onSubmit={inputSubmitHandler}>
            <input
              type="text"
              id="edit-todo"
              name="edit-todo"
              defaultValue={item?.title}
              onChange={inputChangeHandler}
              onBlur={inputBlurHandler}
              ref={inputRef}
            />
          </form>
        ) : (
          <>
            <button
              className={classes["todo_items_left"]}
              onClick={completeTodoTask}
            >
              <CircleButton style={{ fill: "transparent" }} />
              <p
                style={
                  item.is_completed ? { textDecoration: "line-through" } : {}
                }
              >
                {item?.title}
              </p>
            </button>
            <div className={classes["todo_items_right"]}>
              <button onClick={handleEdit}>
                <span className={classes["visually-hidden"]}>Edit</span>
                <EditIcon />
              </button>
              <button onClick={handleDelete}>
                <span className={classes["visually-hidden"]}>Delete</span>
                <DeleteIcon />
              </button>
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default TodoItem;
