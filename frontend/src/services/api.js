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
export const autenticarUsuario = async (loginUsuario, senhaUsuario, tokenAcess) => {
  return { dadosusuario: "teste", idloja: 1, gestor: true };
};
