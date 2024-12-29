package com.ecommerce.repository.sistema;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RegistroUsuarioRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public String registrarNovoUsuario(String nomeUsuario,
                                       String loginUsuario,
                                       String senhaUsuario,
                                       String email) {

        String sql = "EXEC [ecommercebk].[RegistroNovoUsuario] :nomeUsuario, :loginUsuario, :senhaUsuario, :email";

        Query query = entityManager.createNativeQuery(sql)
                .setParameter("nomeUsuario", nomeUsuario)
                .setParameter("loginUsuario", loginUsuario)
                .setParameter("senhaUsuario", senhaUsuario)
                .setParameter("email", email);

        @SuppressWarnings("unchecked")
        List<Object> resultado = query.getResultList();

        if (!resultado.isEmpty()) {
            return (String) resultado.get(0);
        }

        return null;
    }
}