import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <input id="task"></input>
          <label htmlFor="minutes"> durante </label>
          <input type="number" id="minutes" />
          <span> minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <button type="submit">
          Iniciar
        </button>
      </form>
    </HomeContainer>
  )
}
