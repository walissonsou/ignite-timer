import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton, TaskInput, TaskInputCount } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto"></TaskInput>
          <label htmlFor="minutes"> durante </label>
          <TaskInputCount type="number" id="minutes" placeholder="0 0"></TaskInputCount>
          <span> minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountDownButton disabled type="submit">
          Iniciar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
