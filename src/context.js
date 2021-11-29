import React, { createContext, useState, useContext } from "react";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const add = (text) =>
    setTodos([
      ...todos,
      {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        text
      }
    ]);

  const remove = (todo) =>
    setTodos(todos.filter((item) => item.id !== todo.id));

  const update = (todo) => {
    const idx = todos.findIndex((item) => item.id === todo.id);
    const update = todos;
    update[idx] = todo;
    setTodos(update);
  };

  return (
    <TodoContext.Provider value={{ todos, add, remove, update }}>
      {children}
    </TodoContext.Provider>
  );
}
