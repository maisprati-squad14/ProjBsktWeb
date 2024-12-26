import React from 'react';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';

function PaginaInicialOff() {

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
      <Footer />
    </div>
  );

  }

export default PaginaInicialOff;