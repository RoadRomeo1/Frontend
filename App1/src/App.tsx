import { useState } from "react"
import "./App.css"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter App</h1>
      <div style={{ margin: "20px 0", fontSize: "24px" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span style={{ margin: "0 15px", fontWeight: "bold" }}>{count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}
