import React from 'react';
import Header from '../componentes/HeaderMenuGestor';
import Footer from '../componentes/Footer';
import { useLocation } from 'react-router-dom';


function PaginaInicialGestor() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tokenAccess = queryParams.get('tokenAccess');
  const tipoGestor = queryParams.get('tipoGestor');

return (
    <div>
      <Header />

      <Footer />
    </div>
  );

  }

export default PaginaInicialGestor;