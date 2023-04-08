import Header from "../../components/Header";
import "./form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function FormReq() {
  const [servico, setServico] = useState({
    type: "",
  });

  const [product, setProduct] = useState({
    bergamota: false,
    lavanda: false,
    limao: false,
    hortela: false,
    capim_limao: false,
    camomila: false,
    eucalipto: false,
  });

  const [requisicao, setRequisicao] = useState({
    clientName: "",
    clientStreet: "",
    clientEmail: "",
    clientPhone: "",
    clientCpf: "",
    clientCep: "",
    clientNumber: "",
    clientDistrict: "",
    clientComplement: "",
    clientState: "",
    status: 1,
    product: {
      bergamota: false,
      lavanda: false,
      limao: false,
      hortela: false,
      capim_limao: false,
      camomila: false,
      eucalipto: false,
    },
    service: {
      type: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requisicao),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create request");
        }
        return response.json();
      })
      .then((data) => {
        // handle successful response
        console.log(data);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  const handleInputChangeRequisicao = (event) => {
    const { name, value } = event.target;
    setRequisicao({
      ...requisicao,
      [name]: value,
    });
  };

  const handleInputChangeServico = (event) => {
    const { name, value } = event.target;
    setServico({
      ...servico,
      [name]: value,
    });
    setRequisicao({
      ...requisicao,
      service: value,
    });
  };

  const handleInputChangeProduct = (event) => {
    const { name } = event.target;
    setProduct({
      ...product,
      [name]: event.target.checked,
    });
    setRequisicao({
      ...requisicao,
      product: product,
    });
  };

  return (
    <>
      <Header />
      <main>
        <div className="form">
          <h1>Pedido</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientName"
                value={requisicao.clientName}
                onChange={handleInputChangeRequisicao}
                placeholder="Name"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientStreet"
                value={requisicao.clientStreet}
                onChange={handleInputChangeRequisicao}
                placeholder="Rua"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                type="number"
                name="clientNumber"
                value={requisicao.clientNumber}
                onChange={handleInputChangeRequisicao}
                placeholder="Número"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientDistrict"
                value={requisicao.clientDistrict}
                onChange={handleInputChangeRequisicao}
                placeholder="Distrito"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientState"
                value={requisicao.clientState}
                onChange={handleInputChangeRequisicao}
                placeholder="Estado"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                size="lg"
                name="clientComplement"
                value={requisicao.clientComplement}
                onChange={handleInputChangeRequisicao}
                placeholder="Complemento"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                srequired
                size="lg"
                type="email"
                name="clientEmail"
                value={requisicao.clientEmail}
                onChange={handleInputChangeRequisicao}
                placeholder="Email"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientPhone"
                value={requisicao.clientPhone}
                onChange={handleInputChangeRequisicao}
                placeholder="Numero de celular"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientCpf"
                value={requisicao.clientCpf}
                onChange={handleInputChangeRequisicao}
                placeholder="CPF"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                size="lg"
                name="clientCep"
                value={requisicao.clientCep}
                onChange={handleInputChangeRequisicao}
                placeholder="Cep"
                style={{ backgroundColor: "#F2E0E6" }}
              />
            </Form.Group>
            <Form.Select
              required
              size="lg"
              name="type"
              value={servico.type}
              onChange={handleInputChangeServico}
              style={{ marginBottom: 15, backgroundColor: "#F2E0E6" }}
            >
              <option>Serviços</option>
              <option value="Limpeza de pele">Limpeza de pele</option>
              <option value="Maquiagem">Maquiagem</option>
              <option value="Aromaterapia">Aromaterapia</option>
            </Form.Select>
            <Form.Select
              required
              size="lg"
              style={{ marginBottom: 15, backgroundColor: "#F2E0E6" }}
            >
              <option>Produtos</option>
              <option value="Óleo Essencial">Óleo Essencial</option>
            </Form.Select>
            <div>
              <Form.Check
                inline
                label="Camomila"
                name="camomila"
                checked={product.camomila}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Camomila"}
              />
              <Form.Check
                inline
                label="Eucalipto"
                name="eucalipto"
                checked={product.eucalipto}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Eucalipto"}
              />
              <Form.Check
                inline
                label="Hortelã"
                name="hortela"
                checked={product.hortela}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Hortelã"}
              />
              <Form.Check
                inline
                label="Lavanda"
                name="lavanda"
                checked={product.lavanda}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Lavanda"}
              />
              <Form.Check
                inline
                label="Bergamota"
                name="bergamota"
                checked={product.bergamota}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Bergamota"}
              />
              <Form.Check
                inline
                label="Campim-Limão"
                name="capim-limao"
                checked={product.capim_limao}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Campim-Limao"}
              />
              <Form.Check
                inline
                label="Limao"
                name="limao"
                checked={product.limao}
                onChange={handleInputChangeProduct}
                type={"checkbox"}
                id={"Limao"}
              />
            </div>
            <div className="button">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}
