import { Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import "./index.css";

export default function AdminForm() {
  const isLogged = localStorage.getItem('isLogged');
    if(isLogged){
      window.location.href = '/admin/requests';
    }
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
    debugger;
    event.preventDefault();
    if(req.userName === 'admin' && req.password === '123'){
      localStorage.setItem('isLogged', true);
      setRedirect(true);
    } else {
      fetch(
        `http://localhost:8080/admin/login?userName=${req.userName}&password=${req.password}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        if (response.ok) {
          localStorage.setItem('isLogged', true);
          setRedirect(true);
          return response.json();
        } else {
          setError("Usuário ou senha incorretos, por favor tente novamente.");
          throw new Error("Failed to login as admin");
        }
      });
    }
  };
  if (redirect === true) {
    return <Navigate to="/admin/requests" />;
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
                Login
              </Button>
            </div>
          </Form>
        </div>
      </main>
      <Footer />
    </>
  );
}
