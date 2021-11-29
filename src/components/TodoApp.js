import React from "react";
import "../styles.css";
import TodoList from "./TodoList";
import AddForm from "./AddNewTodoForm";
import TodoProvider from "../context";

export default () => {
  return (
    <TodoProvider className="todo-app">
      <AddForm />
      <TodoList />
    </TodoProvider>
  );
};
