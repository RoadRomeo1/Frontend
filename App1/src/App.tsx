import { useState } from "react"
import "./App.css"

export function App() {
  const [count, setCount] = useState(0)

  const resetCounter = () => {
    setCount(0)
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Interactive Counter App</h1>
      <p className="description">A simple counter application built with React</p>
      <div className="counter-container">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span className="counter-value">{count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <button className="reset-button" onClick={resetCounter}>
        Reset
      </button>
    </div>
  )
}
