import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ol className={classes["todo_list"]}>
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p>No new tasks yet</p>
      )}
    </ol>
  );
};

export default TodoList;
