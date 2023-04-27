import { Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import "./index.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AdminFormCadastro() {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [req, setReq] = useState({
    userName: "",
    password: "",
  });
  const handleInputChangeReq = (event) => {
    const { name, value } = event.target;
    setReq({
      ...req,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/admin/users`, {
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
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:8080/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        window.alert("Usuário deletado com sucesso");
        window.location.href = '/admin/register';
      } else {
        window.alert("Erro ao deletar o usuário");
        window.location.href = '/admin/register';
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/admin/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    }).then((response) => {
      if (response.ok) {
        setRedirect(true);
        return response.json();
      } else {
        setError("Este usuário com essa senha já existe, tente novamente.");
        throw new Error("Failed to login as admin");
      }
    });
  };
  if (redirect === true) {
    return <Navigate to="/admin/created" />;
  }

  return (
    <>
      <Header />
      <main>
        <div className="login-form">
          <h2>
            {window.location.pathname.includes("login") ? "Login" : "Cadastro"}{" "}
            Administrador(a)
          </h2>
          {error && <p className="error-message">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                required
                size="lg"
                type="text"
                name="userName"
                value={req.userName}
                onChange={handleInputChangeReq}
                placeholder="Nome de usuário"
                className="login-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                type="password"
                name="password"
                value={req.password}
                onChange={handleInputChangeReq}
                placeholder="********"
                className="login-input"
              />
            </Form.Group>
            <div className="button">
              <Button variant="primary" type="submit">
                Create
              </Button>
            </div>
          </Form>
        </div>
        <div className="users-list">
          {users.map((user) => (
            <div className="user">
              <p className="user-name">{user.name}</p>
              <button onClick={() => deleteUser(user.id)}></button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
