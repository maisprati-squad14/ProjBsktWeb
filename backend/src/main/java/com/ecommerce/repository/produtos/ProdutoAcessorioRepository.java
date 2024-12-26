package com.ecommerce.repository.produtos;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.model.produtos.ProdutoAcessorio;
import java.util.List;

@Repository
public interface ProdutoAcessorioRepository extends JpaRepository<ProdutoAcessorio, Integer> {

    // Chamada padrao para a procedure ObterProdutosAcessorios do BD
    @Query(
            value = "{CALL ObterProdutosAcessorios(:modoAcesso, :tokenAccess)}",
            nativeQuery = true
    )
    List<Object[]> obterProdutosAcessorios(
            @Param("modoAcesso") String modoAcesso,
            @Param("tokenAccess") String tokenAccess
    );
}