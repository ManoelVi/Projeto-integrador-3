import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/root.css';
import LandingPage from './pages/landingPage';
import FormReq from './pages/form/form';
import OrderStatus from './pages/orderStatus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/requisicao' element={<FormReq />} />
        <Route path='/pedido-finalizado' element={<OrderStatus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
