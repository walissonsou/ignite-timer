import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid';
import * as zod from 'zod'


import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton, TaskInput, TaskInputCount } from "./style";
import { useEffect, useState } from 'react';

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

interface Cycle{
  id: string,
  task:string,
  timer: number,  
}

export function Home() {

const [ activeId, setActiveId] = useState<string | null>(null)

const [cycle, setCycle] = useState<Cycle[]>([])

  const { register, handleSubmit, watch, reset} = useForm<itemsForm>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues:{
      task: '',
      timer: 0
    }
  });

   const [ qQtddDeSegundosPassados,setQtddSegundosPassados ] = useState(0)

   const activeCycle = cycle.find(cycle => cycle.id == activeId)   
   const totalDeSegundos = activeCycle ? activeCycle.timer  * 60 : 0
   const atuaisSegundos = activeCycle ? totalDeSegundos - qQtddDeSegundosPassados : 0    // calcular 
   const quantidadeDeMinutos = Math.floor(atuaisSegundos / 60)
   const quantidadeDeSegundos = atuaisSegundos % 60   
   const minutes = String(quantidadeDeMinutos).padStart(2,'0')
   const seconds = String(quantidadeDeSegundos).padStart(2,'0')
  
  console.log(activeCycle)

  const id = uuidv4()

  useEffect(() => {
    if(activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
    
  }, [minutes, seconds])

  function HandleNewCicle(data: itemsForm) {
    const newCyle: Cycle = {
      id,
      task: data.task,
      timer: data.timer
    }      
    // sempre que um estado depender de versão anterior,
    // é super recomendado setar o estado novo em formato 
    // de função "Closuers"
    setCycle((state) => [...state, newCyle])
    setActiveId(id)
    reset()   
  }

  const task = watch('task')
  const taskDisabled = !task

  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(HandleNewCicle)}>
        <FormContainer>
          <label htmlFor="task">
             Vou trabalhar em 
          </label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register("task",
             { required: true,
              minLength: 5, 
              maxLength: 20 })}>
          </TaskInput>
          <label htmlFor="minutes">
             durante 
          </label>
          <TaskInputCount
            type="number" 
            id="minutes" 
            placeholder="0 0"
            step={5}
            {...register("timer", { valueAsNumber: true })}>
          </TaskInputCount>
          <span> minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
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
