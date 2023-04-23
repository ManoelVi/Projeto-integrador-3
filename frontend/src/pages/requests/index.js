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

  const filterByStatus = (status) => {
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
      if(status === "4") {
        setRequests(data);
        return;
      }else{
        const filteredStatus = data.filter(req => req.status === Number(status));
        setRequests(filteredStatus);
      }
    })
  }

  const filterByDate = (date) => {
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
      if(date === "") {
        setRequests(data);
        return;
      }else{
        const filteredDate = data.filter(req => req.createdDate.includes(formatDate(date)));
        setRequests(filteredDate);
      }
    })
  }

  const filterByName = (name) => {
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
      if(name === "") {
        setRequests(data);
        return;
      }else{
        const filteredName = data.filter(req => req.clientName.toLowerCase().includes(name.toLowerCase()));
        setRequests(filteredName);
      }
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
          <select name="status" id="status" onChange={(e) => filterByStatus(e.target.value)}>
            <option value="4">Todos</option>
            <option value="1">Em aberto</option>
            <option value="2">Em andamento</option>
            <option value="3">Encerrado</option>
            <option value="4">Recusado</option>
          </select>
          <input type="text" name="nome" id="nome" placeholder="Digite o nome do cliente" onChange={() => filterByName(document.getElementById('nome').value)} />
          <input type="date" name="data" id="data" onChange={() => filterByDate(document.getElementById('data').value)} />
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