import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess' ;

interface ButtonContainerProps{
 variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'blue',
  secondary: 'green',
  danger: 'red',
  sucess: 'orange'

}

export const ButtonContainer = styled.button<ButtonContainerProps> `
  width: 100px;
  height: 100px;  

  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}
`}} ` 
