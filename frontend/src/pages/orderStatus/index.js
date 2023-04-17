import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

export default function OrderStatus() {
  return (
    <>
      <Header />
      <main>
        <div className="success-modal">
            <h1>Sucesso!!</h1>
            <hr/>
            <p>Seu pedido foi enviado! Aguarde para que nossa equipe entre em contato com você.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
