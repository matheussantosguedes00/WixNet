import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private errorMessage: string = '';

  login(username: string, password: string): boolean {
    // Lógica para realizar a autenticação com o servidor ou localmente
    // Neste exemplo, faremos uma autenticação simples verificando se o username é "admin" e a senha é "123"
    if (username === 'admin' && password === '123') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      this.errorMessage = 'Credenciais inválidas. Verifique seu Email e Senha.';
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getErrorMessage(): string {
    
    return this.errorMessage;
  }
}
