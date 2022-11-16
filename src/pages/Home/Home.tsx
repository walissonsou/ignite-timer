import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton, TaskInput, TaskInputCount } from "./style";

interface itemsForm {
  task: string;
  timer: number;
}

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Digite alguma coisa'),
  timer: zod
  .number()
  .min(5, 'O ciclo precisa ser de no minimo 5min')
  .max(60, 'O ciclo precisa ser de máximo 60min'),
})

export function Home() {

  const { register, handleSubmit, watch, reset} = useForm<itemsForm>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues:{
      task: '',
      timer: 0
    }
  });
  /**
   * A function register, engloba outras três funções dentro de si:
   * function register(name: string){
   * return (
   * On change: () => void;
   * onBlur: () => void;
   * onFocus: () => void; 
   * )}
   * 
   * então quando coloco o register com o spread operator no meu input, é como se eu estivesse trabalhando com o onChange, onBlur.. etc
   */
  function HandleNewCicle(data: itemsForm) {
    console.log(data.task) 
    reset()   
  }

  const task = watch('task')
  const taskDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(HandleNewCicle)}>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register("task", { required: true, minLength: 5, maxLength: 20 })}
          >
          </TaskInput>
          <label htmlFor="minutes"> durante </label>
          <TaskInputCount type="number" id="minutes" placeholder="0 0"
          step={5}
            {...register("timer", { valueAsNumber: true })}

          ></TaskInputCount>
          <span> minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountDownButton
          disabled={taskDisabled} type="submit"
        >
          Iniciar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
