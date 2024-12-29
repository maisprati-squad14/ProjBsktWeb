import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicialOff from './pages/PaginaInicialOff';
import AcessoriosPage from './pages/produtos/AcessoriosPage';
import SignUpForm from "./pages/componentes/SignUpForm";
import LoginPage from "./pages/configuracoessistema/LoginPage";
import PaginaInicialOn from "./pages/configuracoessistema/PaginaInicialOn";
import PaginaInicialGestor from "./pages/configuracoessistema/PaginaInicialGestor";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota RAIZ */}
        <Route path="/" element={<PaginaInicialOff />} />

        {/* Produtos */}
        <Route path="/acessorios" element={<AcessoriosPage />} />

        {/* Sistema */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/novousuario" element={<SignUpForm />} />
        <Route path="/home" element={<PaginaInicialOn />} />
        <Route path="/inicio" element={<PaginaInicialGestor />} />

      </Routes>
    </Router>
  );
}

export default App;