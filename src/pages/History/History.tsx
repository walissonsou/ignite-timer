import { HistoryContainer, HistoryList } from "./style";

export function History() {
  return (    
      <HistoryContainer>    
        <h1> Meu histórico </h1>
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarefa</td>
                <td>20min</td>
                <td>Há 20 dias</td>
                <td>Concluído</td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20min</td>
                <td>Há 20 dias</td>
                <td>Concluído</td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20min</td>
                <td>Há 20 dias</td>
                <td>Concluído</td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20min</td>
                <td>Há 20 dias</td>
                <td>Concluído</td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20min</td>
                <td>Há 20 dias</td>
                <td>Concluído</td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20min</td>
                <td>Há 20 dias</td>
                <td>Concluído</td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
      
  )
 
}
