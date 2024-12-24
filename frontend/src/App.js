import React from 'react';
import LoginPage from './pages/LoginPage';  //caminho da url, ou seja, apos npm start, a pagina ira carregar
import Header from './pages/Header';
import Navbar from './pages/Navbar';
// e com isso, utilize

function App() {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
}

export default App;