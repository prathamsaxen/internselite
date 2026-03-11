import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const mockData = [
    {
      id: 1,
      title: "Review project brief",
      completed: false,
    },
    {
      id: 2,
      title: "Set up development environment",
      completed: true,
    },
  ];

  useEffect(() => {
    setTodos(mockData);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setTodos(mockData);
    } else if (filter === 'active') {
      setTodos(mockData.filter((todo) => !todo.completed));
    } else if (filter === 'done') {
      setTodos(mockData.filter((todo) => todo.completed));
    }
  }, [filter]);

  const addTask = () => {
    if (inputValue.trim() === '') {
   setInputValue('Input is empty');
   setError('Input is empty');
   setTimeout(() => {
    setInputValue('');
    setError('');
   }, 3000);
   return;
    }
    setTodos([...todos, { id: todos.length + 1, title: inputValue.trim(), completed: false }]);
    setInputValue('');
  };

  const changeStatus = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };
  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1 className="todo-title">Todo</h1>
        <p className="todo-subtitle">Keep it simple</p>
      </header>

      <section className="todo-input-section">
        <input type="text" className={`todo-input ${error ? 'todo-input-error' : ''}`} placeholder="What needs to be done?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="button" className="todo-add-btn" aria-label="Add" onClick={addTask}>
          Add
        </button>
      </section>

      <ul className="todo-list">
        {/* <li className="todo-item">
          <span className="todo-check">○</span>
          <span className="todo-text">Review project brief</span>
        </li>
        <li className="todo-item todo-item-done">
          <span className="todo-check">✓</span>
          <span className="todo-text">Set up development environment</span>
        </li>
        <li className="todo-item">
          <span className="todo-check">○</span>
          <span className="todo-text">Design component structure</span>
        </li>
        <li className="todo-item todo-item-done">
          <span className="todo-check">✓</span>
          <span className="todo-text">Create initial wireframes</span>
        </li>
        <li className="todo-item">
          <span className="todo-check">○</span>
          <span className="todo-text">Schedule team sync</span>
        </li> */}
        {todos.map((todo) => (
          <li className={`todo-item ${todo.completed ? 'todo-item-done' : ''}`} key={todo.id}>
            {todo.completed ? (
              <span className="todo-check" onClick={() => changeStatus(todo.id)}>✓</span>
            ) : (
              <span className="todo-check" onClick={() => changeStatus(todo.id)}>○</span>
            )}
            <span className="todo-text">{todo.title}</span>
          </li>
        ))}
      </ul>

      <footer className="todo-footer">
        <span className="todo-count">{todos.length} items left</span>
        <div className="todo-filters">
          <button type="button" className={`todo-filter ${filter === 'all' ? 'todo-filter-active' : ''}`} onClick={() => setFilter('all')}>
            All
          </button>
          <button type="button" className={`todo-filter ${filter === 'active' ? 'todo-filter-active' : ''}`} onClick={() => setFilter('active')}>
            Active
          </button>
          <button type="button" className={`todo-filter ${filter === 'done' ? 'todo-filter-active' : ''}`} onClick={() => setFilter('done')}>
            Done
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
