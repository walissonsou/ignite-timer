import { FormContainer, TaskInput, TaskInputCount } from "./styles";

import { useContext } from "react";
import { CyclesContext } from "../../Home";


export function NewCycleForm() {
  const { activeCycle, register } = useContext(CyclesContext)

  return (
    <FormContainer>
      <label htmlFor="task">
        Vou trabalhar em
      </label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task",
          {
            required: true,
            minLength: 5,
            maxLength: 20
          })}>

      </TaskInput>
      <label htmlFor="minutes">
        durante
      </label>
      <TaskInputCount
        type="number"
        id="minutes"
        placeholder="0 0"
        step={1}
        {...register("timer", { valueAsNumber: true })}>
      </TaskInputCount>
      <span> minutos.</span>
    </FormContainer>
  )
}
