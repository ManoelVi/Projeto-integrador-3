import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import requestsMock from "../../mocks/requestsPageMock";
import "./index.css";
import { useEffect, useState } from "react";

export default function RequestsList() {
  const formatDate = (date) => {
    return dayjs(date).format('DD/MM/YYYY');
  }
  const [requests, setRequests] = useState([]);

  const [status, setStatus] = useState("5");
  const [name, setName] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));

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
      setRequests(data);
    })
  }, [])
  
  const filtrar = () => {
    setRequests([]);
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
      let filteredName = data;
      let filteredDate = data;
      let filteredStatus = data;

      if(name.trim() !== "") {
        filteredName = data.filter(req => req.clientName.toLowerCase().includes(name.toLowerCase()));
        filteredDate = filteredName;
        filteredStatus = filteredName;
      } 

      if(date !== formatDate(new Date())) {
        filteredDate = filteredName.filter(req => req.createdDate.includes(formatDate(date)));
        filteredName = filteredDate;
        filteredStatus = filteredDate;
      }

      if(status !== "5") {
        filteredStatus = filteredDate.filter(req => req.status === Number(status));
        filteredName = filteredStatus;
        filteredDate = filteredStatus;
      }
      
      setRequests(filteredStatus);
    })
  }

  const validateStatus = (status) => {
    if(status === 1){
      return "Em aberto";
    } else if(status === 2){
      return "Em andamento";
    } else if(status === 3){
      return "Encerrado";
    } else if(status === 4){
      return "Recusado";
    }
  }

  return (
    <>
      <Header/>
      <main>
        <div className="filter">
          <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
            <option value="5">Todos</option>
            <option value="1">Em aberto</option>
            <option value="2">Em andamento</option>
            <option value="3">Encerrado</option>
            <option value="4">Recusado</option>
          </select>
          <input type="text" name="nome" id="nome" placeholder="Digite o nome do cliente" onChange={() => setName(document.getElementById('nome').value)} />
          <input type="date" name="data" id="data" onChange={() => setDate(formatDate(document.getElementById('data').value))} />
          <button type="submit" onClick={() => filtrar()}>Filtrar</button>
        </div>
        <table className="requests-table">
          <thead>
            <th>Data de criação</th>
            <th>Nome do cliente</th>
            <th>Telefone</th>
            <th>Tipo do serviço</th>
            <th>Status</th>
          </thead>
          <tbody>
            {requests.map((request) => (
              <>
                <tr>
                  <td>{request.createdDate}</td>
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