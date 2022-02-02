import React , { useContext, useState }from "react";
import "../styles.css";

import TodoList from './TodoList'
import { generateId } from "../utils";
import { TodoContext } from '../App'

export default () => {
  const [input, setInput] = useState('')
  const addTodo = (ev) => {
    ev.preventDefault()
    todoContext.todoDispatch({action: 'addItem', data: {
      id: generateId(),
      text: input
    }})
    setInput('')
  }
  const todoContext = useContext(TodoContext)
  const listContent = todoContext.todoState.length ? 
   <TodoList todoData={todoContext.todoState} setTodoData={todoContext.todoDispatch}/> : 
   <span>...</span>
  return <div>
    <span>Todo List</span>
    {listContent}
    <form onSubmit={(ev)=>addTodo(ev)}>
      <input type="text" onChange={(event) => setInput(event.target.value)} value={input}/>
      <button type="submit">+</button>
    </form>
  </div>;
};
