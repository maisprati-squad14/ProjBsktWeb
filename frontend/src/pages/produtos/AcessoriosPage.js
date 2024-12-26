import React, { useEffect, useState, useRef } from 'react';
import '../../styles/AcessoriosPage.css';
import { listarAcessorios } from '../../services/api';

function AcessoriosPage() {
  const [acessorios, setAcessorios] = useState([]);

  const listRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const carregarAcessorios = async () => {
      try {
        const data = await listarAcessorios('someMode', 'someToken');

        setAcessorios(data);
      } catch (error) {
        console.error("Erro ao carregar acessórios:", error);
      }
    };

    carregarAcessorios();
  }, []);

    const handleScrollLeft = () => {
      if (listRef.current) {
        listRef.current.scrollLeft -= 300;
      }
    };

    const handleScrollRight = () => {
      if (listRef.current) {
        listRef.current.scrollLeft += 300;
      }
    };

   const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - listRef.current.offsetLeft);
      setScrollPosition(listRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
      setIsDown(false);
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - listRef.current.offsetLeft;
      const walk = x - startX;
      listRef.current.scrollLeft = scrollPosition - walk;
    };

  return (
    <div className="acessorios-carousel">
    <h1 className="titulo-ofertas"> OFERTAS </h1>

      <button className="carousel-button left" onClick={handleScrollLeft}>
        &lt;
      </button>

      <ul
        className="acessorios-list"
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >

        {acessorios.map((item, index) => (
          <li key={index} className="acessorios-item">
            <img
              src={item.imagemProdAcessorios}
              alt={item.nomeProdAcessorios}
              className="acessorios-imagem"
            />
            <h3 className="acessorios-nome">{item.nomeProdAcessorios}</h3>
            <p className="acessorios-preco">Preço: R$ {item.precoProdAcessorios}</p>
          </li>
        ))}

      </ul>

        <button className="carousel-button right" onClick={handleScrollRight}>
          &gt;
        </button>
    </div>
  );
}

export default AcessoriosPage;
