package com.ecommerce.model.produtos;

import jakarta.persistence.*; // Use javax.persistence se estiver em versão anterior do Spring Boot

@Entity
@Table(name = "ProdutosAcessorios") // Ajuste para corresponder ao nome da tabela no BD
public class ProdutoAcessorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "NomeProduto", length = 100)
    private String nomeProduto;

    @Column(name = "Preco")
    private Double preco;

    @Column(name = "Imagem")
    private String imagem;

    @Column(name = "Ativo", nullable = false)
    private Boolean ativo = true;

    // Construtor padrão
    public ProdutoAcessorio() {}

    // Construtor com parâmetros (opcional)
    public ProdutoAcessorio(String nomeProduto, Double preco, String imagem, Boolean ativo) {
        this.nomeProduto = nomeProduto;
        this.preco = preco;
        this.imagem = imagem;
        this.ativo = ativo;
    }

    // Getters e Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }
}
