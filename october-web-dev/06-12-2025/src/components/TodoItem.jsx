export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className={`todo-item ${todo.completed ? "done" : ""}`}>
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
  
        <div className="actions">
          <button onClick={() => onToggle(todo)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button className="delete" onClick={() => onDelete(todo._id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  