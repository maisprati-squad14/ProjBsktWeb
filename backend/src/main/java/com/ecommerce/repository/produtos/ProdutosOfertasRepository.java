package com.ecommerce.repository.produtos;

import com.ecommerce.dto.produtos.ProdutosOfertasDTO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProdutosOfertasRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<ProdutosOfertasDTO> obterProdutosEmOfertas(String modoAcesso, String tokenAccess) {

        String sql = "EXEC ObterProdutosEmOfertas :modoAcesso, :tokenAccess";

        Query nativeQuery = entityManager.createNativeQuery(sql)
                .setParameter("modoAcesso", modoAcesso)
                .setParameter("tokenAccess", tokenAccess);

        @SuppressWarnings("unchecked")
        List<Object[]> resultadoBruto = nativeQuery.getResultList();

        List<ProdutosOfertasDTO> ofertas = new ArrayList<>();
        for (Object[] linha : resultadoBruto) {
            // índice 0 = nomeProdOferta (String) -- informacoes para quem for copiar e colar
            String nome = (String) linha[0];
            // índice 1 = precoProdOferta (Double ou BigDecimal dependendo do BD)
            Double preco = (linha[1] != null) ? ((Number) linha[1]).doubleValue() : 0.0;
            // índice 2 = imagemProdOferta (String)
            String imagem = (String) linha[2];

            ProdutosOfertasDTO dto = new ProdutosOfertasDTO(nome, preco, imagem);
            ofertas.add(dto);
        }

        return ofertas;
    }
}