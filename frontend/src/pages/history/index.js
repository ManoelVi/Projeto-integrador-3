import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from "./DnD/DragDrop";

export default function HistoryList() {
  
  return (
    <>
      <Header />
      <main>
        <DndProvider backend={HTML5Backend}>
          <DragDrop/>
        </DndProvider>
        <div className="links">
          <Link to={"/admin/requests"}>Solicitações</Link>
          <Link to={"/admin/history"}>Histórico</Link>
          <Link to={"/admin/register"}>Criar usuários</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
