import styled from "styled-components"

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

export const ToggleButton = styled.button<{ isOn: boolean }>`
  background-color: ${props => props.isOn ? '#4caf50' : '#f44336'};
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: ${props => props.isOn ? '#45a049' : '#d32f2f'};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`
