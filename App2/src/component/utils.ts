export type Errors = {
  name: string
  email: string
  password: string
}

export type State = {
  name: string
  email: string
  password: string
  errors: Errors
  isValid: boolean
}
