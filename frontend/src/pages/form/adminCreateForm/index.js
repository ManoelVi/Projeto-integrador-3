import { Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./index.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AdminFormCadastro() {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
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
      </main>
      <Footer />
    </>
  );
}
