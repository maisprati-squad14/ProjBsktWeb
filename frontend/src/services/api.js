import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Ajustaremos de acordo com cada rota do nosso codigo!

export const autenticarUsuario = async (loginUsuario, senhaUsuario, tokenAcess) => {
  const response = await axios.post(`${API_URL}/usuarios/login`, null, {
    params: {
      loginUsuario,
      senhaUsuario,
      tokenAcess
    }
  });
  return response.data;
};