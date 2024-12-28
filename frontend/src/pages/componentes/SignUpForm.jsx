import React, { useState } from 'react';

const SignUpForm = () => { //estado inicial do formulário
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    login: '',
    password: '',
  });

  const handleChange = (e) => {  //Atualiza o estado do componente com base no valor que o user digita nos inputs do form
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui tem que adicionar a lógica para envio ao backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary dark:bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-nba-blue dark:text-phoenixsuns-yellow mb-6">
          Crie sua Conta
        </h1>

        {/* Campo Nome Completo */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600 dark:text-gray-200"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Digite seu nome completo"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-nba-blue dark:focus:ring-phoenixsuns-yellow"
          />
        </div>

        {/* Campo E-mail */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 dark:text-gray-200"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-nba-blue dark:focus:ring-phoenixsuns-yellow"
          />
        </div>

        {/* Campo Login */}
        <div className="mb-4">
          <label
            htmlFor="login"
            className="block text-sm font-medium text-gray-600 dark:text-gray-200"
          >
            Login
          </label>
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Digite seu login"
            value={formData.login}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-nba-blue dark:focus:ring-phoenixsuns-yellow"
          />
        </div>

        {/* Campo Senha */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 dark:text-gray-200"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-nba-blue dark:focus:ring-phoenixsuns-yellow"
          />
        </div>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full p-4 bg-nba-blue text-white rounded-md shadow-md hover:bg-nba-red dark:hover:bg-orange-500 transition-all duration-300"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
