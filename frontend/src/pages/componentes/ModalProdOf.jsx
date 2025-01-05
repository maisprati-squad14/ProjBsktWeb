import React from "react";

const ModalProdOfertas = ({ produto, fecharModal }) => {
  if (!produto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button
          className="absolute top-4 right-4 text-red-500 font-bold"
          onClick={fecharModal}
        >
          X
        </button>

        <img
          src={produto.imagemProdOferta}
          alt={produto.nomeProdOferta}
          className="w-full h-64 object-contain mb-6"
        />

        <h2 className="text-2xl font-bold mb-4">
          {produto.nomeProdOferta}
        </h2>

        <p className="text-lg font-semibold mb-4">
          R$ {produto.precoProdOferta}
        </p>

        {produto.avaliacaoMedia !== undefined && (
          <p className="text-gray-600">
            Avaliação: {produto.avaliacaoMedia.toFixed(1)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ModalProdOfertas;
