import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid';
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'
import { HandPalm, Play } from 'phosphor-react'

import {
  HomeContainer,  
  StartCountDownButton,
  StopCountDownButton,  
} from "./style";

import React, { createContext, useEffect, useState } from 'react';
import { NewCycleForm } from './components/NewCycleForm';
import { CountDown } from './components/CountDown';

interface itemsForm {
  task: string;
  timer: number;
}

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Digite alguma coisa'),
  timer: zod
  .number()
  .min(1, 'O ciclo precisa ser de no minimo 5min')
  .max(60, 'O ciclo precisa ser de máximo 60min'),
})

interface Cycle{
  id: string,
  task: string,
  timer: number,  
  start: Date,
  interruptedDate?: Date,
  finishDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeId: string| null;
  setActiveId: React.Dispatch<React.SetStateAction<Cycle[]>>;
  register: any;
  setCycle: any;
  qQtddDeSegundosPassados: any;
  setQtddSegundosPassados: any;
  cycle: any;
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {

  const [activeId, setActiveId] = useState<string | null>(null)
  const [cycle, setCycle] = useState<Cycle[]>([])
  const [qQtddDeSegundosPassados, setQtddSegundosPassados] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<itemsForm>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      timer: 0
    }
  });

  const activeCycle = cycle.find(cycle => cycle.id == activeId)
  // calculo o segundo que foi passado no input
  const totalDeSegundos = activeCycle ? activeCycle.timer * 60 : 0
  // verifico quantos segundos tem atualmente
  const atuaisSegundos = activeCycle ? totalDeSegundos - qQtddDeSegundosPassados : 0
  // calculo e arredondo para nao ficar um numero quebrado a qtdd de minutos
  const quantidadeDeMinutos = Math.floor(atuaisSegundos / 60)
  // verifico a parte inteira dos atuais segundos 
  const quantidadeDeSegundos = atuaisSegundos % 60
  // Passo o number para string e falo que para preencher o caractere com 2 caracteres, e quando nao ouver, preencher com '0'
  const minutes = String(quantidadeDeMinutos).padStart(2, '0')
  const seconds = String(quantidadeDeSegundos).padStart(2, '0')

  
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds])

  const id = uuidv4()

  function handleStopCount() {
    setCycle(
      cycle.map((cycle) => {
        if (cycle.id == activeId) {
          return { ...cycle, interruptedDate: new Date() }
        } else
          return cycle
      })
    )
    setActiveId(null)
  }

  function HandleNewCicle(data: itemsForm) {
    const newCyle: Cycle = {
      id,
      task: data.task,
      timer: data.timer,
      start: new Date(),
    }

    setCycle((state) => [...state, newCyle])
    setActiveId(id)
    reset()
  }

  const task = watch('task')
  const taskDisabled = !task


  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(HandleNewCicle)}>

        <CyclesContext.Provider value={{activeCycle, register }}>
          <NewCycleForm />
          <CountDown />
        </CyclesContext.Provider>
        {activeCycle ? (

          <StopCountDownButton
            type="button"
            onClick={handleStopCount}
          >
            <HandPalm size={24} />
            Stop
          </StopCountDownButton>
        ) :
          <StartCountDownButton
            disabled={taskDisabled} type="submit"
          >
            <Play size={24} />
            Iniciar
          </StartCountDownButton>
        }
      </form>
    </HomeContainer>
  )
}
