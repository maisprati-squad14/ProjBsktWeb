import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

//export const autenticarUsuario = async (loginUsuario, senhaUsuario, tokenAccess) => {
//  const response = await axios.post(`${API_URL}/usuarios/login`, null, {
//    params: {
//      loginUsuario,
//      senhaUsuario,
//      tokenAccess
//    }
//  });
//  return response.data;
//};


// enquanto o backend nao esta pronto, utilizei o exemplo abaixo
//export const autenticarUsuario = async (loginUsuario, senhaUsuario, tokenAccess) => {
//  return { dadosusuario: "teste", idloja: 1, gestor: true };
//};

export const listarAcessorios = async (modoAcesso, tokenAccess) => {
  // Chama o endpoint GET /api/acessorios/listaracessorios
  const response = await axios.get(`${API_URL}/acessorios/listaracessorios`, {
    params: { modoAcesso, tokenAccess }
  });
  return response.data; // Retorna o JSON com a lista de acessórios
};
