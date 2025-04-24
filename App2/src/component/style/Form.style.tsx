import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`

export const StyledListItem = styled.li`
  margin-bottom: 15px;
  width: 100%;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 5px;
`

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  margin: 10px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #45a049;
  }
`
