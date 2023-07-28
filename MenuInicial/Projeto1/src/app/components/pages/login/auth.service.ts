import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private tokenKey: string = 'meu_token_de_acesso'; // Chave para o token no LocalStorage
  private errorMessage: string = '';

  login(username: string, password: string): boolean {
    // Lógica para realizar a autenticação com o servidor ou localmente
    // Neste exemplo, faremos uma autenticação simples verificando se o username é "admin" e a senha é "123"
    if (username === 'admin' && password === '123') {
      this.isAuthenticated = true;
      this.saveToken('seu_token_de_acesso_aqui'); // Salvar o token no LocalStorage após o login
      return true;
    } else {
      this.isAuthenticated = false;
      this.errorMessage = 'Credenciais inválidas. Verifique seu Email e Senha.';
      return false;
    }
  }

  isLoggedIn(): boolean {
    // Verificar se o token está presente no LocalStorage e se o usuário está autenticado
    return this.getToken() !== null && this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.removeToken(); // Remover o token do LocalStorage ao fazer logout
    this.errorMessage = '';
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  getErrorMessage(): string {
    return this.errorMessage;
  }
}
