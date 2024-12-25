package com.ecommerce.controller.testes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/testdb")

public class TestController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/db")
    public String testarBanco() {
        try {
            long count = usuarioRepository.count();
            return "Conexão OK. Total de usuários: " + count;
        } catch (Exception e) {
            return "Erro ao conectar no banco: " + e.getMessage();
        }
    }
}
