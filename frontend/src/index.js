import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/root.css";
import "./assets/css/styles.css";
import LandingPage from "./pages/landingPage";
import FormReq from "./pages/form/form";
import OrderStatus from "./pages/orderStatus";
import AdminForm from "./pages/adminLogin";
import Servicos from "./pages/servicos";
import RequestsList from "./pages/requests";
import HistoryList from "./pages/history";
import AdminFormCadastro from "./pages/form/adminCreateForm";
import CreatedAdmin from "./pages/form/adminCreateForm/createdAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/requisicao" element={<FormReq />} />
        <Route path="/pedido-finalizado" element={<OrderStatus />} />
        <Route path="/admin/created" element={<CreatedAdmin />} />
        <Route path="/login" element={<AdminForm />} />
        <Route path="/admin/register" element={<AdminFormCadastro />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/admin/requests" element={<RequestsList />} />
        <Route path="/admin/history" element={<HistoryList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
