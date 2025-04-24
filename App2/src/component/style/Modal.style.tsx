import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const ModalContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5%;
  height: 300px;
  width: 300px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  position: relative;
  background-color: thistle;
  color: cornsilk;
`

export const CloseButton = styled.span`
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
  color: cornsilk;
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const ModalText = styled.span`
  margin-top: 10px;
  font-size: 16px;
`

export const OpenButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #45a049;
  }
`
