package com.ecommerce.controller.produtos;

import com.ecommerce.dto.produtos.ProdutosOfertasDTO;
import com.ecommerce.repository.produtos.ProdutosOfertasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutosOfertasController {

    @Autowired
    private ProdutosOfertasRepository produtosOfertasRepository;

    @GetMapping("/prodofertas")
    public List<ProdutosOfertasDTO> obterOfertas(
            @RequestParam(required = false) String modoAcesso,
            @RequestParam(required = false) String tokenAccess
    ) {
        return produtosOfertasRepository.obterProdutosEmOfertas(modoAcesso, tokenAccess);
    }
}
