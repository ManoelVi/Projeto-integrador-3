import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import "./index.css";

export default function CreatedAdmin() {
  return (
    <>
      <Header />
      <main>
        <div className="success-modal">
          <h1>Sucesso!!</h1>
          <hr />
          <p>
            Um usuário de Administrador foi criado, você já pode se dirigir a
            tela de login!!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
