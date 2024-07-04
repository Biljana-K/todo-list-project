"use client";
import { useState, useEffect } from "react";

import CentralHeader from "@/components/CentralHeader";
import Header from "../components/Header";
import TodoList from "../components/todos/TodoList";
import AddTodo from "../components/todos/AddTodo";

import Card from "../components/layout/Card";
import classes from "../components/layout/Card.module.css";

const MainPage = (props) => {
  const [todos, setTodos] = useState([
    // { title: "Task 1", id: Math.random().toString(), is_completed: true },
    // { title: "Task 2", id: Math.random().toString(), is_completed: false },
  ]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;

  const total_todos = todos.length;

  return (
    <>
      <Header />
      <Card>
        <CentralHeader
          todos_completed={todos_completed}
          total_todos={total_todos}
        />
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Card>
    </>
  );
};

export default MainPage;
