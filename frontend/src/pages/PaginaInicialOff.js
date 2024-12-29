import React from 'react';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';
import Banner from './componentes/Banner';
import SignUpForm from './componentes/SignUpForm';
import CardProduto from './componentes/CardProduto';
import SecaoOfertas from './componentes/SecaoOfertas'


function PaginaInicialOff() {
  // Dados fictícios para teste do CardProduto
  const produtoFicticio = {
    imagem: "https://via.placeholder.com/350",
    nome: "Boné de Basquete NBA",
    preco: "299.90",
    avaliacaoMedia: 4.5, // Nota média de avaliação
  };

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
        <SecaoOfertas />
        <Banner />
        <SignUpForm />

              {/* CardProduto com props fictícias */}
              <CardProduto
                imagem={produtoFicticio.imagem}
                nome={produtoFicticio.nome}
                preco={produtoFicticio.preco}
                avaliacaoMedia={produtoFicticio.avaliacaoMedia}
              />

      <Footer />
    </div>
  );

  }

export default PaginaInicialOff;