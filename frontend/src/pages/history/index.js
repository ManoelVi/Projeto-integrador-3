import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import dayjs from "dayjs";
import "./index.css";
import { useEffect, useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag } from "react-dnd";
import Picture from "./DnD/Picture";
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
