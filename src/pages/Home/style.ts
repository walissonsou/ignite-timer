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
font-size: 1.125rem;
flex-wrap: wrap;
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
