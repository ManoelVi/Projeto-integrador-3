import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import requestsMock from "../../mocks/requestsPageMock";
import "./index.css";
import { useEffect, useState } from "react";

export default function RequestsList() {
  const [requests, setRequests] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:8080/api/getAllRequests`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then(response => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Failed to get requests");
      }
    }).then(data => {
      setRequests(data)
    })
  }, [])


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

  return (
    <>
      <Header/>
      <main>
        <table className="requests-table">
          <thead>
            <th>ID</th>
            <th>Nome do cliente</th>
            <th>Telefone</th>
            <th>Tipo do serviço</th>
            <th>Status</th>
          </thead>
          <tbody>
            {requests.map((request) => (
              <>
                <tr>
                  <td>{request.id}</td>
                  <td>{request.clientName}</td>
                  <td>{request.clientPhone}</td>
                  <td>{request.service.type}</td>
                  <td>{validateStatus(request.status)}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="links">
          <Link to={'/admin/requests'}>Solicitações</Link>
          <Link to={'/admin/history'}>Histórico</Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}