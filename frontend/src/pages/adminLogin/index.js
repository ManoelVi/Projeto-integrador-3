import { Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import "./index.css";

export default function AdminForm() {
  const [redirect, setRedirect] = useState(false);
  const [req, setReq] = useState({
    email: '',
    password: '',
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
    fetch("http://localhost:8080/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create request");
      }
      setRedirect(true);
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  };
  if (redirect === true) {
    return <Navigate to="/menu" />;
  }

  return (
    <>
      <Header/>
      <main>
        <div className="login-form">
          <h2>Login Administrador(a)</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                required
                size="lg"
                type="email"
                name="email"
                value={req.email}
                onChange={handleInputChangeReq}
                placeholder="Email"
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
      <Footer/>
    </>
  )
}