import React from 'react';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';
import Banner from './componentes/Banner';
import SignUpForm from './componentes/SignUpForm';
import CardProduto from './componentes/CardProduto';
import SecaoOfertas from './componentes/SecaoOfertas'
import ProductPage from './componentes/ProductPage'


function PaginaInicialOff() {
  // Dados fictícios para teste do CardProduto
  const produtoFicticio = {
    imagem: "https://via.placeholder.com/350",
    nome: "Boné de Basquete NBA",
    preco: 299.90,
    avaliacaoMedia: 4.5, // Nota média de avaliação
  };

return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
        <SecaoOfertas />

        <Carousel />

                <div>
                  <iframe
                    title="AcessoriosPage"
                    src="/acessorios"
                    style={{
                      width: '100%',
                      height: '320px',
                      border: 'none',
                      backgroundColor: '#e5e7eb'
                    }}
                  />
                </div>

        <Banner />
        <SignUpForm />
        <ProductPage produto={produtoFicticio} />


      <Footer />
    </div>
  );

  }

export default PaginaInicialOff;