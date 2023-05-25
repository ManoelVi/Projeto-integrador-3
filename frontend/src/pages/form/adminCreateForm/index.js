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

  const [reqconfirm, setReqConfirm] = useState();

  const handleInputChangeReq = (event) => {
    const { name, value } = event.target;
    setReq({
      ...req,
      [name]: value,
    });
  };

  const confirmPassword = (event) => {
    const {value} = event.target;
    setReqConfirm(value);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/admin/allUsers`, {
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
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteUser = (userName) => {
    fetch(`http://localhost:8080/admin/deleteUser/${userName}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        window.alert("Usuário deletado com sucesso");
        window.location.href = '/admin/register';
      } else {
        window.alert("Erro ao deletar o usuário");
        console.log(response);
        window.location.href = '/admin/register';
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(req.password != reqconfirm){
      setError("Confirmação de senha incorreta.");
      return;
    }
    fetch(`http://localhost:8080/admin/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    }).then((response) => {
        if (response.ok) {
          setRedirect(true);
          return response.json();
        } else {
          setError("Este usuário já existe, tente novamente.");
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
                placeholder="Nome de usuário:"
                className="login-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                id="password"
                size="lg"
                type="password"
                name="password"
                value={req.password}
                onChange={handleInputChangeReq}
                placeholder="Senha:"
                className="login-input"
              />
              <Form.Control
                required
                id="confirm"
                size="lg"
                type="password"
                name="confirm"
                value={reqconfirm}
                onChange={confirmPassword}
                placeholder="Confirmar senha:"
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
          <h2>Usuários Ativos</h2>
          {users.map((user) => (
            <div className="user">
              <p className="user-name">{user.userName}</p>
              <button onClick={() => deleteUser(user.userName)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
