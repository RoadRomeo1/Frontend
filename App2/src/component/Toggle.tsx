import { useState } from "react"
import { ToggleContainer, ToggleButton } from "./style/Toggle.style"

const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <ToggleContainer>
      <ToggleButton isOn={isOn} onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </ToggleButton>
    </ToggleContainer>
  )
}
export default Toggle
