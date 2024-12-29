import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import LoginBackgroundVideo from '../../assets/videos/LoginBackgroundVideo.mp4';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('senhaUsuario', password);

      const response = await axios.post(
        'http://localhost:8080/api/usuarios/acessologin',
        params
      );

      const tokenAccess = response.data.tokenAccess;
      const tipoGestor = response.data.tipoGestor;

      if (tipoGestor === 0) {
        window.location.href = `/home?tokenAccess=${tokenAccess}`;
      } else {
        window.location.href = `/inicio?tokenAccess=${tokenAccess}&tipoGestor=${tipoGestor}`;
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setErrorMessage('Email ou Senha inválido!');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={LoginBackgroundVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Conteúdo do Login */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-nba-blue dark:text-phoenixsuns-yellow mb-6">
            Login
          </h1>

          {/* Campo de E-mail */}
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
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-nba-blue dark:focus:ring-phoenixsuns-yellow"
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 dark:text-gray-200"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-nba-blue dark:focus:ring-phoenixsuns-yellow"
            />
          </div>

          {/* Esqueceu sua senha */}
          <div className="mb-6 text-right">
            <a
              href="#"
              className="text-sm text-nba-blue dark:text-phoenixsuns-yellow hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>

          {/* Botões de Rede Social */}
          <div className="flex justify-between gap-4 mb-6">
            <button className="flex items-center justify-center w-1/2 p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300">
              <FaGoogle className="text-2xl mr-2" />
              Entrar com o Google
            </button>
            <button className="flex items-center justify-center w-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
              <FaFacebook className="text-2xl mr-2" />
              Entrar com o Facebook
            </button>
          </div>

          {/* Botão Entrar */}
          <button
            onClick={handleLogin}
            className="w-full p-4 bg-nba-blue text-white rounded-md shadow-md hover:bg-nba-red dark:hover:bg-orange-500 transition-all duration-300"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;