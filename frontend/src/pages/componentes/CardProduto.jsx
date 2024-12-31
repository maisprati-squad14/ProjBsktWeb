import React from "react";

const CardProduto = ({ imagem, nome, preco, avaliacaoMedia, onCardClick }) => {
  // Função para renderizar estrelas com preenchimento parcial
  const renderStars = (media) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(media)) {
        estrelas.push(
          <div
            key={i}
            className="relative w-5 h-5 text-phoenixsuns-yellow"
            style={{ fontSize: "20px" }}
          >
            <span className="absolute left-0 top-0">&#9733;</span>
          </div>
        );
      } else if (i === Math.ceil(media)) {
        const porcentagem = (media % 1) * 100;
        estrelas.push(
          <div
            key={i}
            className="relative w-5 h-5 text-gray-300"
            style={{ fontSize: "20px" }}
          >
            <span className="absolute left-0 top-0">&#9733;</span>
            <div
              className="absolute left-0 top-0 overflow-hidden text-phoenixsuns-yellow"
              style={{
                width: `${porcentagem}%`,
              }}
            >
              &#9733;
            </div>
          </div>
        );
      } else {
        estrelas.push(
          <div
            key={i}
            className="relative w-5 h-5 text-gray-300"
            style={{ fontSize: "20px" }}
          >
            <span className="absolute left-0 top-0">&#9733;</span>
          </div>
        );
      }
    }
    return estrelas;
  };

  return (
    <div
      className="border rounded-lg shadow-md p-4 m-4 max-w-xs flex flex-col justify-between cursor-pointer"
      onClick={onCardClick}
    >
      {/* Imagem do Produto */}
      <div className="flex justify-center mb-4">
        <img
          src={imagem}
          alt={nome}
          className="w-48 h-48 border rounded object-contain"
        />
      </div>

      {/* Nome do Produto */}
      <h2 className="text-lg font-bold mb-2">{nome}</h2>

      {/* Preço do Produto */}
      <p className="text-lg font-semibold mb-4">R$ {preco}</p>

      {/* Avaliação do Produto */}
      <div className="flex items-center mb-4">
        <div className="flex">{renderStars(avaliacaoMedia)}</div>
        <span className="ml-2 text-sm text-gray-600">
          ({avaliacaoMedia.toFixed(1)})
        </span>
      </div>

      {/* Botão Adicionar ao Carrinho */}
      <button
        className="w-full bg-nba-blue text-white py-2 rounded-md font-semibold hover:bg-nba-red transition duration-300"
        onClick={(e) => {
          e.stopPropagation(); // Impede que o evento clique abra o modal
          alert(`Produto "${nome}" adicionado ao carrinho!`);
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default CardProduto;
