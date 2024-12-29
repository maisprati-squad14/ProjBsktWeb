import React from 'react';
import Header from '../componentes/HeaderLogado';
import Navbar from '../componentes/Navbar';
import Carousel from '../componentes/Carousel';
import Footer from '../componentes/Footer';
import Banner from '../componentes/Banner';
import SignUpForm from '../componentes/SignUpForm';
import { useLocation } from 'react-router-dom';


function PaginaInicialOn() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tokenAccess = queryParams.get('tokenAccess');

return (
    <div>
      <Header />
      <Navbar />
      <Carousel />

            <div>
              <iframe
                title="AcessoriosPage"
                src="/acessorios"
                style={{
                  width: '100%',
                  height: '350px',
                  border: 'none',
                  backgroundColor: 'rgb(29 17 96 / 1)'
                }}
              />
            </div>

        <Carousel />
        <Banner />
      <Footer />
    </div>
  );

  }

export default PaginaInicialOn;