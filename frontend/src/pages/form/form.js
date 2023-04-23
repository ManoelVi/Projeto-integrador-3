import Header from "../../components/Header";
import "./form.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import axios from "axios";

export default function FormReq() {
  const [servico, setServico] = useState({
    type: "",
  });

  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [errorAtLeastOne, setErrorAtLeastOne] = useState(null);
  const [isOilSelected, setIsOilSelected] = useState(false);

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
    clientNeighborhood: "",
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

    if (isOilSelected && !Object.values(product).some((p) => p)) {
      setError(
        "Por favor, selecione pelo menos uma propriedade do óleo essencial."
      );
      setErrorAtLeastOne("");
      return;
    }
    if (
      (servico.type === "" || servico.type === "Serviços") &&
      !isOilSelected
    ) {
      setErrorAtLeastOne(
        "Por favor selecione ao menos um serviço, ou um produto."
      );
      setError("");
      return;
    }

    fetch("http://localhost:8080/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requisicao),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create request");
        }
        setRedirect(true);
        return response.json();
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

  const handleInputChangeProductSelect = (event) => {
    const { value } = event.target;
    if (value === "Óleo Essencial") {
      setIsOilSelected(true);
    } else {
      setIsOilSelected(false);
    }
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

  if (redirect === true) {
    return <Navigate to="/pedido-finalizado" />;
  }

  const handleZipCodeBlur = (event) => {
    const zipCode = event.target.value.replace(/\D/g, "");
    axios
      .get(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((response) => {
        if (response.data.erro) {
          throw new Error("CEP inválido");
        }
        setRequisicao({
          ...requisicao,
          clientStreet: response.data.logradouro,
          clientNeighborhood: response.data.bairro,
          clientState: response.data.uf,
        });
      })
      .catch((error) => {
        setError(error.message);
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
            <Row className="mb-3" style={{ padding: 0, width: "101.9%" }}>
              <Form.Group as={Col} controlId="formGridClientStreet">
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
              <Form.Group as={Col} controlId="formGridClientNumber">
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
              <Form.Group as={Col} controlId="formGridClientComplement">
                <Form.Control
                  size="lg"
                  name="clientComplement"
                  value={requisicao.clientComplement}
                  onChange={handleInputChangeRequisicao}
                  placeholder="Complemento"
                  style={{ backgroundColor: "#F2E0E6" }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3" style={{ padding: 0, width: "101.9%" }}>
              <Form.Group as={Col} controlId="formGridClientStreet">
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  name="clientCep"
                  value={requisicao.clientCep}
                  onChange={handleInputChangeRequisicao}
                  onBlur={handleZipCodeBlur}
                  placeholder="Cep"
                  style={{ backgroundColor: "#F2E0E6" }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClientNumber">
                <Form.Control
                  required
                  size="lg"
                  name="clientNeighborhood"
                  value={requisicao.clientNeighborhood}
                  onChange={handleInputChangeRequisicao}
                  placeholder="Bairro"
                  style={{ backgroundColor: "#F2E0E6" }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClientComplement">
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
            </Row>
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
            <Row className="mb-3" style={{ padding: 0, width: "101.9%" }}>
              <Form.Group as={Col} controlId="formGridClientPhone">
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  name="clientPhone"
                  value={requisicao.clientPhone}
                  onChange={handleInputChangeRequisicao}
                  placeholder="Numero de celular"
                  style={{ backgroundColor: "#F2E0E6" }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClientCpf">
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  name="clientCpf"
                  value={requisicao.clientCpf}
                  onChange={handleInputChangeRequisicao}
                  placeholder="CPF"
                  style={{ backgroundColor: "#F2E0E6" }}
                />
              </Form.Group>
            </Row>
            {errorAtLeastOne && (
              <p className="error-message">{errorAtLeastOne}</p>
            )}
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
              onChange={handleInputChangeProductSelect}
              style={{ marginBottom: 15, backgroundColor: "#F2E0E6" }}
            >
              <option>Produtos</option>
              <option value="Óleo Essencial">Óleo Essencial</option>
            </Form.Select>
            {error && <p className="error-message">{error}</p>}
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
      <Footer />
    </>
  );
}
