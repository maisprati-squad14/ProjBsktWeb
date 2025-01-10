import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductPage = ({ produto }) => {
  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  const { nome, preco, avaliacaoMedia, descricao } = produto;

  const handleAddToCart = () => {
    alert(`${nome} foi adicionado ao carrinho!`);
    // Aqui você pode implementar lógica adicional, como atualizar o estado global ou localStorage.
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-nba-blue hover:underline">
              Home
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/ofertas" className="text-nba-blue hover:underline">
              Ofertas
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-800 font-bold">{nome}</li>
        </ol>
      </nav>

      {/* Detalhes do Produto */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Imagem do Produto */}
        <div className="w-full lg:w-1/3">
          <img
            src={produto.imagem}
            alt={nome}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Informações do Produto */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{nome}</h1>
          <p className="text-xl text-nba-red font-semibold mb-2">
            R$ {preco.toFixed(2)}
          </p>

          {/* Avaliação */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => {
              const fullStar = index < Math.floor(avaliacaoMedia);
              const halfStar =
                index === Math.floor(avaliacaoMedia) &&
                avaliacaoMedia % 1 !== 0;

              return (
                <div
                  key={index}
                  className="relative text-gray-300"
                  style={{ width: "24px", height: "24px" }}
                >
                  {/* Estrela base (vazia) */}
                  <FaStar className="absolute inset-0" />
                  {/* Estrela cheia ou parcial */}
                  <FaStar
                    className="absolute inset-0 text-phoenixsuns-yellow"
                    style={{
                      clipPath: halfStar
                        ? "inset(0 50% 0 0)" // Metade da estrela preenchida
                        : "none",
                    }}
                  />
                </div>
              );
            })}
            <span className="ml-2 text-sm text-gray-600">
              {avaliacaoMedia.toFixed(1)} de 5
            </span>
          </div>

          {/* Descrição */}
          <p className="text-gray-700 leading-relaxed mb-6">{descricao}</p>

          {/* Botão Adicionar ao Carrinho */}
          <button
            onClick={handleAddToCart}
            className="bg-nba-blue text-white flex items-center justify-center gap-2 text-lg px-8 py-3 rounded-md shadow-lg hover:bg-nba-red transition-all duration-300"
          >
            <FaShoppingCart className="text-xl" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
