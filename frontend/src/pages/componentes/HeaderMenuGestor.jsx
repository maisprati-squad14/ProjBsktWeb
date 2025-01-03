import React from "react";

const HeaderMenuGestor = () => {
  return (
    <div className="flex justify-center gap-8 py-2 bg-primary dark:bg-nba-blue">
      <button className="px-6 py-2 text-primary bg-nba-red dark:bg-nba-orange rounded hover:font-bold">
        Vendas
      </button>
      <button className="px-6 py-2 text-primary bg-nba-red dark:bg-nba-orange rounded hover:font-bold">
        Produtos
      </button>
      <button className="px-6 py-2 text-primary bg-nba-red dark:bg-nba-orange rounded hover:font-bold">
        Clientes
      </button>
      <button className="px-6 py-2 text-primary bg-nba-red dark:bg-nba-orange rounded hover:font-bold">
        Loja
      </button>
    </div>
  );
};

export default HeaderMenuGestor;