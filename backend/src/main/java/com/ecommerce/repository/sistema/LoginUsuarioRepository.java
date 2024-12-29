package com.ecommerce.repository.sistema;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class LoginUsuarioRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public Map<String, Object> loginUsuario(String email, String senhaUsuario) {
        String sql = "EXEC [ecommercebk].[LoginUsuario] :email, :senhaUsuario";

        Query query = entityManager.createNativeQuery(sql)
                .setParameter("email", email)
                .setParameter("senhaUsuario", senhaUsuario);

        @SuppressWarnings("unchecked")
        List<Object[]> resultado = query.getResultList();

        if (!resultado.isEmpty()) {
            Object[] row = resultado.get(0);
            Map<String, Object> map = Map.of(
                    "tokenAccess", row[0],
                    "tipoGestor", row[1]
            );
            return map;
        }

        return null;
    }
}
