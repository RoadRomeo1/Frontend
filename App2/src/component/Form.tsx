import { useEffect, useRef, useState } from "react"
import "./style/form.css"

type Errors = {
  name: string
  email: string
  password: string
}

type State = {
  name: string
  email: string
  password: string
  errors: Errors
  isValid: boolean
}
const initialErrors: Errors = {
  name: "",
  email: "",
  password: "",
}

const initialState: State = {
  name: "",
  email: "",
  password: "",
  errors: initialErrors,
  isValid: false,
}

const Form = () => {
  const nameRef = useRef<HTMLInputElement | null>(null)
  const [errors, setErrors] = useState<Errors>(initialErrors)
  const [state, setState] = useState<State>(initialState)
  const [isValid, setIsValid] = useState<boolean>(false)

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // check if all fields are filled
    setIsValid(Validate)
    if (isValid) {
      console.log(state)
    }
  }

  const Validate = (): boolean => {
    let isValid = true
    const newErrors: Errors = { ...initialErrors }

    if (state.name.trim() === "") {
      newErrors.name = "Name is required"
      isValid = false
    }
    if (state.email.trim() === "") {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }
    if (state.password.trim() === "") {
      newErrors.password = "Password is required"
      isValid = false
    } else if (state.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: "" })
    setState({ ...state, [name]: value })
  }

  return (
    <form>
      {/* hide bullets here */}
      <ul style={{ listStyleType: "none" }}>
        <li>
          {" "}
          <input type="text" placeholder="Name" name="name" value={state.name} ref={nameRef} onChange={handleChange} />
          <span className="error">{errors.name}</span>
        </li>
        <li>
          <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} />
          <span className="error">{errors.email}</span>
        </li>
        <li>
          <input type="password" placeholder="Password" name="password" value={state.password} onChange={handleChange} />
          <span className="error">{errors.password}</span>
        </li>
        <li>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </li>
      </ul>
    </form>
  )
}
export default Form
