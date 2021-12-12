import "../styles.css";

export default ({todoItem, removeItem}) => <div className="todo">
    <span>{todoItem.text}</span>
    <button onClick={() => {removeItem(todoItem.id)}}>DELETE</button>
</div>;
