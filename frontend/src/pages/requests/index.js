import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import requestsMock from "../../mocks/requestsPageMock";
import "./index.css";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function RequestsList() {
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };
  const [requests, setRequests] = useState([]);

  const [status, setStatus] = useState("5");
  const [name, setName] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

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

  const filtrar = () => {
    setRequests([]);
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
        let filteredName = data;
        let filteredDate = data;
        let filteredStatus = data;

        if (name.trim() !== "") {
          filteredName = data.filter((req) =>
            req.clientName.toLowerCase().includes(name.toLowerCase())
          );
          filteredDate = filteredName;
          filteredStatus = filteredName;
        }

        if (date !== formatDate(new Date())) {
          filteredDate = filteredName.filter((req) =>
            req.createdDate.includes(formatDate(date))
          );
          filteredName = filteredDate;
          filteredStatus = filteredDate;
        }

        if (status !== "5") {
          filteredStatus = filteredDate.filter(
            (req) => req.status === Number(status)
          );
          filteredName = filteredStatus;
          filteredDate = filteredStatus;
        }

        setRequests(filteredStatus);
      });
  };

  const validateStatus = (status) => {
    if (status === 1) {
      return "Em aberto";
    } else if (status === 2) {
      return "Em andamento";
    } else if (status === 3) {
      return "Encerrado";
    } else if (status === 4) {
      return "Recusado";
    }
  };

  const handleRowClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const getTotalGains = (requests) => {
    let total = 0;
    for (let i = 0; i < requests.length; i++) {
      total += requests[i].cost;
    }
    return total;
  };

  return (
    <>
      <Header />
      <main>
        <div className="filter">
          <select
            name="status"
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="5">Todos</option>
            <option value="1">Em aberto</option>
            <option value="2">Em andamento</option>
            <option value="3">Encerrado</option>
            <option value="4">Recusado</option>
          </select>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do cliente"
            onChange={() => setName(document.getElementById("nome").value)}
          />
          <input
            type="date"
            name="data"
            id="data"
            onChange={() =>
              setDate(formatDate(document.getElementById("data").value))
            }
          />
          <button type="submit" onClick={() => filtrar()}>
            Filtrar
          </button>
        </div>
        <table className="requests-table">
          <thead>
            <th>Data de criação</th>
            <th>Nome do cliente</th>
            <th>Telefone</th>
            <th>Tipo do serviço</th>
            <th>Valor</th>
            <th>Status</th>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <Fragment key={index}>
                <tr
                  onClick={() => handleRowClick(request)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{request.createdDate}</td>
                  <td>{request.clientName}</td>
                  <td>{request.clientPhone}</td>
                  <td>{request.service.type}</td>
                  <td>R$ {request.cost.toString().replace(".", ",")}</td>
                  <td>{validateStatus(request.status)}</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
        <div className="gains">
          <p>Total de ganhos:</p>
          <p>R$ {getTotalGains(requests).toString().replace(".", ",")}</p>
        </div>
        {selectedRequest && (
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            className="custom-modal"
          >
            <Modal.Header closeButton className="custom-modal-header">
              <Modal.Title className="custom-modal-title">
                Detalhes do Pedido
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">
              <p>Data de criação: {selectedRequest.createdDate}</p>
              <p>Nome do cliente: {selectedRequest.clientName}</p>
              <p>Email: {selectedRequest.clientEmail}</p>
              <p>Telefone: {selectedRequest.clientPhone}</p>
              <p>
                Tipo do serviço:{" "}
                {selectedRequest.service ? selectedRequest.service.type : ""}
              </p>
              <td>
                Valor: R$ {selectedRequest.cost.toString().replace(".", ",")}
              </td>
              <p>Status: {validateStatus(selectedRequest.status)}</p>
              <p>
                Endereço do cliente: {selectedRequest.clientStreet},{" "}
                {selectedRequest.clientNumber},{" "}
                {selectedRequest.clientNeighborhood},{" "}
                {selectedRequest.clientState}, {selectedRequest.clientCep}
              </p>
              {selectedRequest.product.bergamota ||
              selectedRequest.product.lavanda ||
              selectedRequest.product.limao ||
              selectedRequest.product.hortela ||
              selectedRequest.product.capim_limao ||
              selectedRequest.product.camomila ||
              selectedRequest.product.eucalipto ? (
                <>
                  <p>Detalhes do produto:</p>
                  <p className="product-details">
                    {" "}
                    óleo esseicial com as propriedades:{" "}
                    {Object.keys(selectedRequest.product)
                      .filter(
                        (key) => key !== "id" && selectedRequest.product[key]
                      )
                      .join(", ")}
                  </p>
                </>
              ) : null}
            </Modal.Body>
            <Modal.Footer className="custom-modal-footer">
              <Button
                variant="secondary"
                onClick={() => setShowModal(false)}
                className="custom-modal-button"
              >
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <div className="links">
          <Link to={"/admin/requests"}>Solicitações</Link>
          <Link to={"/admin/history"}>Histórico</Link>
          <Link to={"/admin/register"}>Criar usuários</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
