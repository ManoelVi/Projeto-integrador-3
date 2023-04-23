import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import requestsMock from "../../mocks/requestsPageMock";
import dayjs from 'dayjs';
import "./index.css";
import { useEffect, useState } from "react";

export default function HistoryList() {
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
      setRequests(data)
    })
  }, [])

  const getHistory = (status = 0) => {
    let requestStatus = [];
    for (const request of requests) {
      if(request.status === status){
        requestStatus.push(request);
      }
    }
    return requestStatus;
  }
  return (
    <>
      <Header/>
      <main>
        <div className="history-cards">
          <div className="history-card">
            <h5>Em aberto</h5>
            {getHistory(0).map((request) => (
              <>
                <div className="history-card-item">
                  <p>{formatDate(request.createdAt)}</p>
                  <p>{request.clientName}</p>
                  <p>{request.service.type}</p>
                </div>
              </>
            ))}
          </div>
          <div className="history-card">
            <h5>Em andamento</h5>
            {getHistory(1).map((request) => (
              <>
                <div className="history-card-item">
                  <p>{formatDate(request.createdAt)}</p>
                  <p>{request.clientName}</p>
                  <p>{request.service.type}</p>
                </div>
              </>
            ))}
          </div>
          <div className="history-card">
            <h5>Encerrado</h5>
            {getHistory(2).map((request) => (
              <>
                <div className="history-card-item">
                  <p>{formatDate(request.createdAt)}</p>
                  <p>{request.clientName}</p>
                  <p>{request.service.type}</p>
                </div>
              </>
            ))}
          </div>
          <div className="history-card">
            <h5>Recusado</h5>
            {getHistory(3).map((request) => (
              <>
                <div className="history-card-item">
                  <p>{formatDate(request.createdAt)}</p>
                  <p>{request.clientName}</p>
                  <p>{request.service.type}</p>
                </div>
              </>
            ))}
          </div>
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