import React, { useState } from "react";
import { useTodos } from "../context";
import "../styles.css";

export default () => {
  const [text, setText] = useState("");
  const { add } = useTodos();

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();
    add(text);
  };

  return (
    <form className="todo-form" onSubmit={onSave}>
      <input type="text" id="text" value={text} onChange={onChange} />
      <input type="submit" value="Add" />
    </form>
  );
};
