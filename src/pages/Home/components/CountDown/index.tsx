import { useContext, useEffect } from "react";
import { CyclesContext } from "../../Home";
import { CountdownContainer, Separator } from "./styles";

export function CountDown() {
  const totalDeSegundos = activeCycle ? activeCycle.timer * 60 : 0
  const [qQtddDeSegundosPassados, setQtddSegundosPassados] = useState(0)

  const minutes = String(quantidadeDeMinutos).padStart(2, '0')
  const seconds = String(quantidadeDeSegundos).padStart(2, '0')
  
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
