import React, { useState } from "react";
import CardProduto from "./CardProduto"; // Ajuste o caminho conforme necessário
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SecaoOfertas = () => {
  // Dados fictícios para os produtos
  const produtos = [
    { imagem: "https://via.placeholder.com/150", nome: "Tênis de Basquete NBA", preco: "299.90", avaliacaoMedia: 4.5 },
    { imagem: "https://via.placeholder.com/150", nome: "Camiseta NBA", preco: "99.90", avaliacaoMedia: 4.0 },
    { imagem: "https://via.placeholder.com/150", nome: "Bola de Basquete", preco: "149.90", avaliacaoMedia: 4.8 },
    { imagem: "https://via.placeholder.com/150", nome: "Tênis Nike Air", preco: "399.90", avaliacaoMedia: 4.3 },
    { imagem: "https://via.placeholder.com/150", nome: "Camiseta PUMA", preco: "129.90", avaliacaoMedia: 4.1 },
    { imagem: "https://via.placeholder.com/150", nome: "Meia Adidas", preco: "29.90", avaliacaoMedia: 4.6 },
  ];

  // Estado para controlar o índice de início dos produtos visíveis
  const [indiceInicio, setIndiceInicio] = useState(0);

  // Função para mover os produtos para a esquerda
  const moverEsquerda = () => {
    if (indiceInicio > 0) {
      setIndiceInicio(indiceInicio - 1);
    }
  };

  // Função para mover os produtos para a direita
  const moverDireita = () => {
    if (indiceInicio < produtos.length - 4) { // Garantir que não mostre mais de 4 itens
      setIndiceInicio(indiceInicio + 1);
    }
  };

  // Produtos visíveis com base no índice de início
  const produtosVisiveis = produtos.slice(indiceInicio, indiceInicio + 4);

  return (
    <div className="secao-ofertas">
      {/* Título da seção */}
      <h2 className="text-2xl font-bold my-6 text-center text-nba-blue">OFERTAS</h2>

      {/* Grid de Produtos */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtosVisiveis.map((produto, index) => (
            <CardProduto
              key={index}
              imagem={produto.imagem}
              nome={produto.nome}
              preco={produto.preco}
              avaliacaoMedia={produto.avaliacaoMedia}
            />
          ))}
        </div>

        {/* Botões de navegação */}
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
