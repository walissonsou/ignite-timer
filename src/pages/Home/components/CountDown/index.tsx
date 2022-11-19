import { useEffect } from "react";
import { CountdownContainer, Separator } from "./styles";

export function CountDown() {
  return (
    <>
    
    
    
    const activeCycle = cycle.find(cycle => cycle.id == activeId)
    // calculo o segundo que foi passado no input
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
            setCycle(
              cycle.map((cycle) => {
                if (cycle.id == activeId) {
                  return { ...cycle, finishDate: new Date() }
                } else
                  return cycle
              })
            )
          } else {
            setQtddSegundosPassados(secondsDiference)
          }
         
        }, 1000)
      }
  
      return () => {
        clearInterval(interval)
      }
    }, [activeCycle, totalDeSegundos])
  


    <CountdownContainer>
    <span>{minutes[0]}</span>
    <span>{minutes[1]}</span>
    <Separator>:</Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </CountdownContainer>
  </>
  )
}
