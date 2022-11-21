import { useContext, useEffect } from "react";
import { CyclesContext } from "../../Home";
import { CountdownContainer, Separator } from "./styles";

export function CountDown() {
  const totalDeSegundos = activeCycle ? activeCycle.timer * 60 : 0
  const [qQtddDeSegundosPassados, setQtddSegundosPassados] = useState(0)

  const minutes = String(quantidadeDeMinutos).padStart(2, '0')
  const seconds = String(quantidadeDeSegundos).padStart(2, '0')

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
