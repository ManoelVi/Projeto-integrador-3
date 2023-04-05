import Header from "../../components/Header";
import './form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormReq() {
    return (
        <>
            <Header />
            <main>
                <div className="form">
                    <h1>Pedido</h1>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control required size="lg" type="Name" placeholder="Name" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" type="Endereço" placeholder="Endereço" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control srequired ize="lg" type="email" placeholder="Email" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Numero de celular" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control required size="lg" placeholder="Cep" style={{ backgroundColor: '#F2E0E6' }} />
                        </Form.Group>
                        <Form.Select required={false} size="lg" style={{ marginBottom: 15, backgroundColor: '#F2E0E6' }}>
                            <option>Serviços</option>
                            <option value="1">Limpeza de pele</option>
                            <option value="2">Maquiagem</option>
                            <option value="3">Aromaterapia</option>
                        </Form.Select>
                        <Form.Select required={false} size="lg" style={{ marginBottom: 15, backgroundColor: '#F2E0E6' }}>
                            <option>Produtos</option>
                            <option value="1">Óleo Essencial</option>
                            <option value="2">Protetor Solar</option>
                            <option value="3">Serum Facial</option>
                            <option value="4">Esfoliante</option>
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