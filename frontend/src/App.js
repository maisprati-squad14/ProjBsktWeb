import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicialOff from './pages/PaginaInicialOff';
import AcessoriosPage from './pages/produtos/AcessoriosPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<PaginaInicialOff />} />

        {/* Rota para /acessorios, caso queira acessar diretamente */}
        <Route path="/acessorios" element={<AcessoriosPage />} />
      </Routes>
    </Router>
  );
}

export default App;