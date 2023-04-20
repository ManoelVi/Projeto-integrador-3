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
    if(window.location.pathname.includes('login')){
      fetch("http://localhost:8080/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to login as admin");
        }
        setRedirect(true);
        return response.json();
      }).catch((error) => {
        console.error(error);
      });
    }else{
      if(req.storeAuth !=='123456'){
        alert('Senha da loja inválida');
      }else{
        fetch("http://localhost:8080/api/admin/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: req.email,
            password: req.password,
          }),
        }).then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create admin account");
          }
          setRedirect(true);
          return response.json();
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  };
  if (redirect === true) {
    return <Navigate to="/menu" />;
  }

  return (
    <>
      <Header/>
      <main>
        <div className="login-form">
          <h2>{window.location.pathname.includes('login') ? 'Login' : 'Cadastro'} Administrador(a)</h2>
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
            {window.location.pathname.includes('login') ? '' : 
              <Form.Group className="mb-3">
                <Form.Control
                  required
                  size="lg"
                  type="password"
                  name="storeAuth"
                  value={req.storeAuth}
                  onChange={handleInputChangeReq}
                  placeholder="Senha da loja(conferir com o gestor)"
                  className="login-input"
                />
              </Form.Group>
            }
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