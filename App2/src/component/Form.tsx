import { useEffect, useRef, useState } from "react"
import { Errors, State } from "../component/utils"
import { StyledForm, StyledList, StyledListItem, StyledInput, ErrorMessage, SubmitButton } from "./style/Form.style"


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
    <StyledForm>
      <StyledList>
        <StyledListItem>
          <StyledInput type="text" placeholder="Name" name="name" value={state.name} ref={nameRef} onChange={handleChange} />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </StyledListItem>
        <StyledListItem>
          <StyledInput type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </StyledListItem>
        <StyledListItem>
          <StyledInput type="password" placeholder="Password" name="password" value={state.password} onChange={handleChange} />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </StyledListItem>
        <StyledListItem>
          <SubmitButton type="submit" onClick={handleSubmit}>
            Submit
          </SubmitButton>
        </StyledListItem>
      </StyledList>
    </StyledForm>
  )
}
export default Form
