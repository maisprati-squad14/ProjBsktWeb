import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Ajustaremos de acordo com cada rota!

export const buscarProdutos = async () => {
  const response = await axios.get(`${API_URL}/produtos`); // exemplo, nao funcional
  return response.data;
};