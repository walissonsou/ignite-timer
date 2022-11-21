import { useContext, useEffect, useState } from "react";
import { CyclesContext } from "../../Home";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from 'date-fns'

export function CountDown() {
  const [qQtddDeSegundosPassados, setQtddSegundosPassados] = useState(0)

  const { 
    activeCycle, 
    activeId,
    handleStopCount   
  } = useContext(CyclesContext)

    const totalDeSegundos = activeCycle ? activeCycle.timer * 60 : 0

    useEffect(() => {
      let interval: number
  
      if (activeCycle) {
        interval = setInterval(() => {
          const secondsDiference = differenceInSeconds(
            new Date(),
            activeCycle.start
          )
  
          if (secondsDiference >= totalDeSegundos) {
            handleStopCount()
          } else {
            setQtddSegundosPassados(secondsDiference)
          }
         
        }, 1000)
      }
  
      return () => {
        clearInterval(interval)
      }
    }, [activeCycle, totalDeSegundos])

   
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
  

  
  return (   


  <CountdownContainer>
    <span>{minutes[0]}</span>
    <span>{minutes[1]}</span>
    <Separator>:</Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </CountdownContainer>
  )
}
