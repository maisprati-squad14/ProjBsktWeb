package com.ecommerce.controller.testes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


import com.ecommerce.repository.produtos.ProdutoAcessorioRepository;

@RestController
@RequestMapping("/api/debug")

public class TestController {

    @Autowired
    private ProdutoAcessorioRepository produtoAcessorioRepository;

    // teste na url com http://localhost:8080/api/debug/test-acessorios
    @GetMapping("/test-acessorios")
    public String testarAcessorios() {
        try {
            // Chama a mesma procedure que o seu método de produção
            List<Object[]> resultado = produtoAcessorioRepository.obterProdutosAcessorios(null, null);

            // Gera uma string com o total e um pedaço dos dados para debug
            StringBuilder sb = new StringBuilder("Total de registros: " + resultado.size() + "\n");
            for (Object[] linha : resultado) {
                sb.append("nomeProdAcessorios=").append(linha[0])
                        .append(", precoProdAcessorios=").append(linha[1])
                        .append(", imagemProdAcessorios=").append(linha[2])
                        .append("\n");
            }
            return sb.toString();
        } catch (Exception e) {
            return "Erro: " + e.getMessage();
        }
    }
}


//import com.ecommerce.repository.UsuarioRepository;
//
//@RestController
//@RequestMapping("/api/testdb")
//
//public class TestController {
//
//    @Autowired
//    private UsuarioRepository usuarioRepository;
//
//    @GetMapping("/db")
//    public String testarBanco() {
//        try {
//            long count = usuarioRepository.count();
//            return "Conexão OK. Total de usuários: " + count;
//        } catch (Exception e) {
//            return "Erro ao conectar no banco: " + e.getMessage();
//        }
//    }
//}
