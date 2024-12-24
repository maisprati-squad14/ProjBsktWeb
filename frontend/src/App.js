import React from 'react';
import LoginPage from './pages/LoginPage';  //caminho da url, ou seja, apos npm start, a pagina ira carregar
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Carousel from './pages/Carousel';
import Footer from './pages/Footer';
// e com isso, utilize

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;