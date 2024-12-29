package com.ecommerce.dto.sistema;

public class LoginUsuarioDTO {

        private String email;
        private String senhaUsuario;

        public LoginUsuarioDTO() {
        }

        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }

        public String getSenhaUsuario() {
            return senhaUsuario;
        }
        public void setSenhaUsuario(String senhaUsuario) {
            this.senhaUsuario = senhaUsuario;
        }
}
