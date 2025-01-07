import React, { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const SecaoOfertas = () => {
  const [produtos, setProdutos] = useState([]);
  const [indiceInicio, setIndiceInicio] = useState(0);

  useEffect(() => {
    async function fetchOfertas() {
      try {
        const response = await axios.get("http://localhost:8080/api/produtos/prodofertas");
        let results = response.data;
        results = results.sort(() => Math.random() - 0.5);
        setProdutos(results);
      } catch (error) {
        console.error("Erro ao buscar ofertas:", error);
      }
    }

    fetchOfertas();
  }, []);

  const moverEsquerda = () => {
    if (indiceInicio > 0) {
      setIndiceInicio(indiceInicio - 1);
    }
  };

  const moverDireita = () => {
    if (indiceInicio < produtos.length - 4) {
      setIndiceInicio(indiceInicio + 1);
    }
  };

  const produtosVisiveis = produtos.slice(indiceInicio, indiceInicio + 4);

  return (
    <div className="secao-ofertas">
      <h2 className="text-2xl font-bold my-6 text-center text-nba-blue">OFERTAS</h2>

      <div className="relative">
        {/* Grid de produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtosVisiveis.map((produto, index) => (
            <CardProduto
              key={index}
              imagem={produto.imagemProdOferta}
              nome={produto.nomeProdOferta}
              preco={produto.precoProdOferta}
              avaliacaoMedia={4.0}
            />
          ))}
        </div>

        {/* Botões de rolagem (esquerda/direita) */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-4">
          <button
            onClick={moverEsquerda}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-nba-red dark:bg-nba-orange bg-opacity-50 dark:bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-75 dark:hover:bg-opacity-75"
            disabled={indiceInicio === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={moverDireita}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-nba-red dark:bg-nba-orange bg-opacity-50 dark:bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-75 dark:hover:bg-opacity-75"
            disabled={indiceInicio >= produtos.length - 4}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecaoOfertas;
