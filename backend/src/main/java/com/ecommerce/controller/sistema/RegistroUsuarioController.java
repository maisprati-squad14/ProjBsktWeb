package com.ecommerce.controller.sistema;

import com.ecommerce.repository.sistema.RegistroUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
public class RegistroUsuarioController {

    @Autowired
    private RegistroUsuarioRepository registroUsuarioRepository;

    @PostMapping("/novoregistro")
    public Map<String, Object> registrarUsuario(
            @RequestParam String nomeUsuario,
            @RequestParam String loginUsuario,
            @RequestParam String senhaUsuario,
            @RequestParam String email
    ) {
        String token = registroUsuarioRepository
                .registrarNovoUsuario(nomeUsuario, loginUsuario, senhaUsuario, email);

        Map<String, Object> resposta = new HashMap<>();
        resposta.put("tokenAccess", token);
        return resposta;
    }
}
