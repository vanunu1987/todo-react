import React, { useReducer } from "react";
import "./styles.css";
import todoJson from "./todos.json";

import TodoApp from "./components/TodoApp"

const reducer = (state, {action, data}) => ({
  removeItem: (id) => [...state].filter((todo) => todo.id !== id),
  addItem: (item) => {
    const newArr = [...state]
    newArr.push(item)
    return newArr
  }
}[action](data))
export const TodoContext = React.createContext()

export default () => {
  const [todos, dispatch] = useReducer(reducer, todoJson)
  return (
    <TodoContext.Provider value={{todoState: todos, todoDispatch: dispatch}}>
      <div className="app">
        <TodoApp/>
      </div>
    </TodoContext.Provider>
  );
};
