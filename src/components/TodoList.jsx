import React from "react";
import "../styles.css";

import Todo from "./Todo"

export default ({todoData, setTodoData}) => {
  
  const removeItem = (id) => {
    const reduceTodos = todoData.reduce((reduceTodos, todo) => {
      if (todo.id !== id) {
        reduceTodos.push(todo)
      }
      return reduceTodos
    },[])
    setTodoData(reduceTodos)
  }
  const items = todoData.map(todo => <Todo 
      key={todo.id} 
      todoItem={todo}  
      removeItem ={ (id) => removeItem(id)}
    />)
  return (
    <div className="todo-list">
      {items}
    </div>
  );
};
