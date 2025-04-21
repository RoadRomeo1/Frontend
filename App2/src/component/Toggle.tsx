import { useState } from "react"

const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>
    </div>
  )
}
export default Toggle
