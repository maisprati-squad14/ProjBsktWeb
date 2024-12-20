package com.ecommerce.controller.usuarios;

import com.ecommerce.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public Map<String, Object> autenticarUsuario(
            @RequestParam String loginUsuario,
            @RequestParam String senhaUsuario,
            @RequestParam String tokenAcess
    ) {
        List<Object[]> resultado = usuarioRepository.loginUsuario(loginUsuario, senhaUsuario, tokenAcess);
        Map<String, Object> response = new HashMap<>();

        if (!resultado.isEmpty()) {
            Object[] linha = resultado.get(0);
            String dadosusuario = (String) linha[0];
            Integer idloja = (Integer) linha[1];
            Boolean gestor = (Boolean) linha[2];

            response.put("dadosusuario", dadosusuario);
            response.put("idloja", idloja);
            response.put("gestor", gestor);
        } else {
            response.put("error", "Usuário não encontrado ou credenciais inválidas.");
        }

        return response;
    }
}
