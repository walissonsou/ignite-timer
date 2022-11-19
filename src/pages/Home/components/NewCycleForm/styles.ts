import styled from "styled-components";

export const FormContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
color: ${props => props.theme['gray-100']};
font-size: 1rem;
flex-wrap: wrap;
`
const baseInput = styled.input`
background: transparent;
height: 2.5rem;
border:0;
border-bottom: 2px solid gray;
font-weight: bold;
font-size: 1.125rem;
padding: 0 0.5rem;
&:focus{
  box-shadow: none;
  border-color: green;
}
&::placeholder{
  color: gray;
}
`
export const TaskInput = styled(baseInput)`
flex: 1; 
// é um atalho  que aciona 3 propriedades:
// flex-grow - crescer além do original
// flex shrink -> diminuir o tamanho se necessário
// flex basis -> qual tamanho ideal para o componente?
`

export const TaskInputCount = styled(baseInput)`
height: 2.5rem;
width: 4rem;
`
