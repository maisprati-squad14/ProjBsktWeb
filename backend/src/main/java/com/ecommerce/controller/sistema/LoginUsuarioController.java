package com.ecommerce.controller.sistema;

import com.ecommerce.repository.sistema.LoginUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
public class LoginUsuarioController {

    @Autowired
    private LoginUsuarioRepository loginUsuarioRepository;

    @PostMapping("/acessologin")
    public Map<String, Object> logarUsuario(
            @RequestParam String email,
            @RequestParam String senhaUsuario
    ) {

        Map<String, Object> resultado = loginUsuarioRepository
                .loginUsuario(email, senhaUsuario);

        Map<String, Object> resposta = new HashMap<>();
        resposta.put("tokenAccess", resultado.get("tokenAccess"));
        resposta.put("tipoGestor", resultado.get("tipoGestor"));

        return resposta;
    }

}
