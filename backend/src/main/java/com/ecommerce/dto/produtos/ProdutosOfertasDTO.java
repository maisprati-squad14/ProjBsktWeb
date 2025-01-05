package com.ecommerce.dto.produtos;

public class ProdutosOfertasDTO {

    private String nomeProdOferta;
    private Double precoProdOferta;
    private String imagemProdOferta;

    public ProdutosOfertasDTO() {}

    public ProdutosOfertasDTO(String nomeProdOferta, Double precoProdOferta, String imagemProdOferta) {
        this.nomeProdOferta = nomeProdOferta;
        this.precoProdOferta = precoProdOferta;
        this.imagemProdOferta = imagemProdOferta;
    }

    public String getNomeProdOferta() {
        return nomeProdOferta;
    }

    public void setNomeProdOferta(String nomeProdOferta) {
        this.nomeProdOferta = nomeProdOferta;
    }

    public Double getPrecoProdOferta() {
        return precoProdOferta;
    }

    public void setPrecoProdOferta(Double precoProdOferta) {
        this.precoProdOferta = precoProdOferta;
    }

    public String getImagemProdOferta() {
        return imagemProdOferta;
    }

    public void setImagemProdOferta(String imagemProdOferta) {
        this.imagemProdOferta = imagemProdOferta;
    }

}
