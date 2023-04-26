import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import dayjs from "dayjs";
import requestsMock from "../../../mocks/requestsPageMock";
import "../index.css";
import { useEffect, useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
      })
      .catch((error) => {
        console.log(error);
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

  const [{ isOver: isOver1 }, drop1] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToBoard(item, 1),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToBoard(item, 2),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver3 }, drop3] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToBoard(item, 3),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver4 }, drop4] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToBoard(item, 4),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBoard = ({ id }, column) => {
    const status = column === 1 ? 1 : column === 2 ? 2 : column === 3 ? 3 : 4;
    console.log(status);
    fetch(`http://localhost:8080/api/update/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientName: "Raquel Aparecida Teixeira",
        clientStreet: "Rua vital rifarto",
        clientEmail: "raquelteixeira507@gmail.com",
        clientPhone: "11963298596",
        clientCpf: "54131172801",
        clientCep: "05893210",
        clientNumber: "112",
        clientDistrict: "São Paulo",
        clientComplement: "",
        clientState: "SP",
        status: status,
        product: {
          bergamota: false,
          lavanda: false,
          limao: false,
          hortela: true,
          capim_limao: false,
          camomila: true,
          eucalipto: true,
          "capim-limao": true,
        },
        service: "Maquiagem",
      }),
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
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
      <div className="history-card" ref={drop1}>
        <h5>Em aberto</h5>
        {getHistory(1).map((request) => {
          return (
            <Picture
              nome={request.clientName}
              service={request.service.type}
              data={formatDate(request.createdAt)}
              status={request.status}
              id={request.id}
            />
          );
        })}
      </div>

      <div className="history-card" ref={drop2}>
        <h5>Em andamento</h5>
        {getHistory(2).map((request) => {
          return (
            <Picture
              nome={request.clientName}
              service={request.service.type}
              data={formatDate(request.createdAt)}
              status={request.status}
              id={request.id}
            />
          );
        })}
      </div>
      <div className="history-card" ref={drop3}>
        <h5>Encerrado</h5>
        {getHistory(3).map((request) => {
          return (
            <Picture
              nome={request.clientName}
              service={request.service.type}
              data={formatDate(request.createdAt)}
              status={request.status}
              id={request.id}
            />
          );
        })}
      </div>
      <div className="history-card" ref={drop4}>
        <h5>Recusado</h5>
        {getHistory(4).map((request) => {
          return (
            <Picture
              nome={request.clientName}
              service={request.service.type}
              data={formatDate(request.createdAt)}
              status={request.status}
              id={request.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DragDrop;
