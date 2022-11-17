import styled from "styled-components";

export const HomeContainer = styled.main`


flex:1;

display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;


  }
 `
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

export const CountdownContainer = styled.div`
font-size: 14rem;
font-family: 'Roboto Mono', monospace;
line-height: 10rem;
color:${props => props.theme['gray-100']};
display: flex;
gap: 1rem;

span {
  background: ${props => props.theme['gray-700']};
  border-radius: 8px;
}

`;

export const Separator = styled.div`
color: green;
padding: 2rem 0;
color: ${props => props.theme['green-500']};
width: 4rem;
overflow: hidden;
display: flex;
justify-content: center;
`

export const StartCountDownButton = styled.button`
width: 100%;
border: 0;
padding: 1rem;
border-radius: 8px;

display: flex;
align-items: center;
justify-content: center;

gap: 8.5rem;
font-weight: bold;

cursor: pointer;

background: ${props => props.theme['green-500']};
color: ${props => props.theme['gray-100']};

&:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
&:not(:disabled) :hover {
  background: gray;
}


`
export const StopCountDownButton = styled.button`
width: 100%;
border: 0;
padding: 1rem;
border-radius: 8px;

display: flex;
align-items: center;
justify-content: center;

gap: 8.5rem;
font-weight: bold;

cursor: pointer;

background: ${props => props.theme['red-500']};
color: ${props => props.theme['gray-100']};

&:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
&:not(:disabled) :hover {
  background: gray;
}

`
