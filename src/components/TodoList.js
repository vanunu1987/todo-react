import React, { useState } from "react";
import { useTodos } from "../context";
import Todo from "./Todo";
import "../styles.css";

export default () => {
  const [editable, setEditable] = useState();
  const { todos, update, remove } = useTodos();

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id}>
          {editable === todo.id ? (
            <input
              defaultValue={todo.text}
              onChange={(e) => update({ ...todo, text: e.target.value })}
            />
          ) : (
            <p>{todo.text}</p>
          )}
          <div className="buttons">
            <button className="delete" onClick={() => remove(todo)}>
              Delete
            </button>

            {editable ? (
              <button className="save" onClick={() => setEditable()}>
                Save
              </button>
            ) : (
              <button className="edit" onClick={() => setEditable(todo.id)}>
                Edit
              </button>
            )}
          </div>
        </Todo>
      ))}
    </div>
  );
};
