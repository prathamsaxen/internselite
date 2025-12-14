import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello from React!')

  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple React App</h1>
        <p className="subtitle">A basic React application with JSX</p>
      </header>

      <main className="app-main">
        <section className="card">
          <h2>Counter Example</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="count-value">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button 
            className="reset-btn" 
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </section>

        <section className="card">
          <h2>Input Example</h2>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type something..."
            className="input-field"
          />
          <p className="display-message">You typed: <strong>{message}</strong></p>
        </section>

        <section className="card">
          <h2>List Example</h2>
          <ul className="list">
            <li>✅ JSX is working</li>
            <li>✅ React hooks are functional</li>
            <li>✅ Components are rendering</li>
            <li>✅ Styling is applied</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App

