import { useState } from "react"
import "./App.css"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increments</button>
      {count}
      <button onClick={() => setCount(count - 1)}>Decrements</button>
    </>
  )
}
