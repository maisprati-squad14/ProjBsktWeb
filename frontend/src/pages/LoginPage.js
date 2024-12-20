import React, { useState } from 'react';
import { autenticarUsuario } from '../services/api';

function LoginPage() {
  const [loginUsuario, setLoginUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');
  const [tokenAcess, setTokenAcess] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleLogin = async () => {
    const data = await autenticarUsuario(loginUsuario, senhaUsuario, tokenAcess);
    setResultado(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Login Usuario"
        value={loginUsuario}
        onChange={e => setLoginUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha Usuario"
        value={senhaUsuario}
        onChange={e => setSenhaUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token Access"
        value={tokenAcess}
        onChange={e => setTokenAcess(e.target.value)}
      />
      <button onClick={handleLogin}>Autenticar</button>

      {resultado && (
        <div>
          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
