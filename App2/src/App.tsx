import { AppContainer, Title, ComponentSection, SectionTitle } from "./App.style"
import Form from "./component/Form"
import Toggle from "./component/Toggle"
import Modal from "./component/Modal"

function App() {
  return (
    <AppContainer>
      <Title>React Components with Styled Components</Title>

      <ComponentSection>
        <SectionTitle>Form Component</SectionTitle>
        <Form />
      </ComponentSection>

      <ComponentSection>
        <SectionTitle>Toggle Component</SectionTitle>
        <Toggle />
      </ComponentSection>

      <ComponentSection>
        <SectionTitle>Modal Component</SectionTitle>
        <Modal />
      </ComponentSection>
    </AppContainer>
  )
}

export default App
