package com.ecommerce.config;

import com.ecommerce.model.Usuario;
import com.ecommerce.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DbTestRunner implements CommandLineRunner {

    private final UsuarioRepository usuarioRepository;

    public DbTestRunner(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("==== Iniciando teste de conexão com o banco de dados ====");

        // 1. Exibir quantos registros existem na tabela
        long count = usuarioRepository.count();
        System.out.println("Total de registros em 'Usuarios': " + count);

        // 2. Inserir um registro de teste (opcional)
        if (count == 0) {
            Usuario novo = new Usuario("Nome Exemplo", "email@teste.com", "senha_hash_123");
            usuarioRepository.save(novo);

            System.out.println("Usuário inserido: " + novo.getNome());
        }
    }
}
