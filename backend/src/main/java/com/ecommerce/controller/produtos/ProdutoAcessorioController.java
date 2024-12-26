package com.ecommerce.controller.produtos;

import com.ecommerce.repository.produtos.ProdutoAcessorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/acessorios")
public class ProdutoAcessorioController {

    @Autowired
    private ProdutoAcessorioRepository produtoAcessorioRepository;

    @GetMapping("/listaracessorios")
    public List<Map<String, Object>> listarAcessorios(
            @RequestParam(required = false) String modoAcesso,
            @RequestParam(required = false) String tokenAccess
    ) {
        // Chamamos a procedure
        List<Object[]> resultado = produtoAcessorioRepository.obterProdutosAcessorios(modoAcesso, tokenAccess);

        // Convertemos o Object[] -> Map (ou poderá ser DTO futuramente)
        List<Map<String, Object>> resposta = new ArrayList<>();
        for (Object[] linha : resultado) {
            Map<String, Object> item = new HashMap<>();
            item.put("nomeProdAcessorios", (String) linha[0]);
            item.put("precoProdAcessorios", linha[1]);    // ou cast para BigDecimal, se apropriado
            item.put("imagemProdAcessorios", (String) linha[2]);
            resposta.add(item);
        }

        return resposta;
    }
}