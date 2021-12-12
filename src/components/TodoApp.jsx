import React , { useEffect, useState }from "react";
import "../styles.css";

import todoJson from "../todos.json"
import TodoList from './TodoList'
import { generateId } from "../utils";

export default () => {
  useEffect(() =>{
    setTimeout(()=>{
      setTodoData([...todoJson])
    },1000)
  },[])
  const [todoData, setTodoData] = useState([])
  const [input, setInput] = useState()
  const addTodo = (ev) => {
    ev.preventDefault()
    setTodoData([...todoData, {
      id: generateId(),
      text: input
    }])
    setInput('')
  }
  const listContent = todoData.length ? 
   <TodoList todoData={todoData} setTodoData={setTodoData}/> : 
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
