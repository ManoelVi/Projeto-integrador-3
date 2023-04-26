import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import dayjs from "dayjs";
import requestsMock from '../../../mocks/requestsPageMock'
import "../index.css";
import { useEffect, useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag } from "react-dnd";
import Picture from "./Picture";


function DragDrop(setTask) {
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/getAllRequests`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to get requests");
        }
      })
      .then((data) => {
        setRequests(data);
      });
  }, []);

  const getHistory = (status = 0) => {
    let requestStatus = [];
    for (const request of requests) {
      if (request.status === status) {
        requestStatus.push(request);
      }
    }
    return requestStatus;
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addItemToBoard = ({ status, id}) => {
    console.log(status);
    fetch(`http://localhost:8080/api/update/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: { status: status },
    })
    .then((response) => {
      console.log("response", response);
    }).catch((error) => {
      console.log(error);
    });

    fetch(`http://localhost:8080/api/getAllRequests`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to get requests");
      }
    })
    .then((data) => {
      setRequests(data);
    });
  };

  return (
    <div className="history-cards">
      <div className="history-card" ref={drop}>
        <h5>Em aberto</h5>
        {getHistory(1).map((request) => {
          return <Picture nome={request.clientName} service={request.service.type} data={formatDate(request.createdAt)} status={request.status} id={request.id} />;
        })}
      </div>

      <div className="history-card" ref={drop}>
        <h5>Em andamento</h5>
        {getHistory(2).map((request) => {
          return <Picture nome={request.clientName} service={request.service.type} data={formatDate(request.createdAt)} status={request.status} id={request.id} />;
        })}
      </div>
      <div className="history-card" ref={drop}>
        <h5>Encerrado</h5>
        {getHistory(3).map((request) => {
          return <Picture nome={request.clientName} service={request.service.type} data={formatDate(request.createdAt)} status={request.status} id={request.id} />;
        })}
      </div>
      <div className="history-card" ref={drop}>
        <h5>Recusado</h5>
        {getHistory(4).map((request) => {
          return <Picture nome={request.clientName} service={request.service.type} data={formatDate(request.createdAt)} status={request.status} id={request.id} />;
        })}
      </div>
    </div>
  )
}

export default DragDrop