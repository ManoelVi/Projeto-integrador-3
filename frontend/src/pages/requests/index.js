import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import requestsMock from "../../mocks/requestsPageMock";
import "./index.css";

export default function RequestsList() {
  const validateStatus = (status) => {
    if(status === 0){
      return "Em aberto";
    } else if(status === 1){
      return "Em andamento";
    } else if(status === 2){
      return "Encerrado";
    } else if(status === 3){
      return "Recusado";
    }
  }

  const getTotalGains = (requests) => {
    let total = 0;
    for (let i = 0; i < requests.length; i++) {
      total += requests[i].cost    
    }
    return total;
  }

  return (
    <>
      <Header/>
      <main>
        <table className="requests-table">
          <thead>
            <th>ID</th>
            <th>Nome do cliente</th>
            <th>Valor do serviço</th>
            <th>Status</th>
          </thead>
          <tbody>
            {requestsMock.map((request) => (
              <>
                <tr>
                  <td>{request.id}</td>
                  <td>{request.clientName}</td>
                  <td>R$ {request.cost.toString().replace('.', ',')}</td>
                  <td>{validateStatus(request.status)}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="gains">
          <p>Total de ganhos:</p>
          <p>R$ {getTotalGains(requestsMock).toString().replace('.', ',')}</p>
        </div>
        <div className="links">
          <Link to={'/admin/requests'}>Solicitações</Link>
          <Link to={'/admin/history'}>Histórico</Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}