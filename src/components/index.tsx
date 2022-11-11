import { ButtonContainer, ButtonVariant } from './styles.button';

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant}>
        Enviar
      </ButtonContainer>
    </>
  )
}
