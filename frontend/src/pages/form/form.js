import Header from "../../components/Header";
import './form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export default function FormReq() {

    const [isRequired, setIsRequired] = useState(false);
    const [requisicao, setRequisicao] = useState({
        clientName: '',
        clientStreet: '',
        clientPhone: '',
        clientCpf: '',
        clientCep: '',
        clientNumber: '',
        clientDistrict: '',
        clientComplement: '',
        clientState: '',
        status: 1,
        service: {
          type: '',
        },
        product_oil: {
            bergamota: false,
            lavanta: false,
            limao: false,
            hortela: false,
            capim_limao: false,
            camomila: false,
            eucalipto: false,
        },
    }); 

    return (
        <>
            <Header />
            <main>
                <div className="form">
                    <h1>Pedido</h1>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control required size="lg" placeholder="Name" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Rua" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" type="number" placeholder="Número" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Distrito" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Estado" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control  size="lg" placeholder="Complemento" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control srequired size="lg" type="email" placeholder="Email" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Numero de celular" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="CPF" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Cep" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Select required size="lg" style={{ marginBottom: 15, backgroundColor: '#F2E0E6' }}>
                            <option>Serviços</option>
                            <option value="1">Limpeza de pele</option>
                            <option value="2">Maquiagem</option>
                            <option value="3">Aromaterapia</option>
                        </Form.Select>
                        <Form.Select required size="lg" style={{ marginBottom: 15, backgroundColor: '#F2E0E6' }}>
                            <option>Produtos</option>
                            <option value="1">Óleo Essencial</option>
                        </Form.Select>
                        <div>
                            <Form.Check
                                inline
                                label="Camomila"
                                name="Camomila"
                                type={'checkbox'}
                                id={'Camomila'}
                            />
                            <Form.Check
                                inline
                                label="Eucalipto"
                                name="Eucalipto"
                                type={'checkbox'}
                                id={'Eucalipto'}
                            />
                            <Form.Check
                                inline
                                label="Hortelã"
                                name="Hortelã"
                                type={'checkbox'}
                                id={'Hortelã'}
                            />
                            <Form.Check
                                inline
                                label="Lavanda"
                                name="Lavanda"
                                type={'checkbox'}
                                id={'Lavanda'}
                            />
                            <Form.Check
                                inline
                                label="Bergamota"
                                name="Bergamota"
                                type={'checkbox'}
                                id={'Bergamota'}
                            />
                            <Form.Check
                                inline
                                label="Capim-Limao"
                                name="Capim-Limao"
                                type={'checkbox'}
                                id={'Capim-Limao'}
                            />
                            <Form.Check
                                inline
                                label="Limao"
                                name="Limao"
                                type={'checkbox'}
                                id={'Limao'}
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