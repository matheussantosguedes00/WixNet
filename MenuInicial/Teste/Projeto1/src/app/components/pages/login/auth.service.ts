import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private tokenKey: string = 'meu_token_de_acesso';
  private refreshTokenKey: string = 'meu_refresh_token';
  private errorMessage: string = '';

  constructor() {
    // Ao criar o serviço, verifique se o usuário já está autenticado com base no token salvo no LocalStorage
    this.isAuthenticated = this.getToken() !== null;
  }

  login(username: string, password: string): boolean {
    // Lógica para realizar a autenticação local
    const user = this.users.find((u) => u.username === username && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      this.saveTokens(user.accessToken, user.refreshToken); // Salvar o token e o refresh token no LocalStorage após o login
      return true;
    } else {
      this.isAuthenticated = false;
      this.errorMessage = 'Credenciais inválidas. Verifique seu Email e Senha.';
      return false;
    }
  }

  isLoggedIn(): boolean {
    // Verificar se o usuário está autenticado
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.removeTokens(); // Remover o token e o refresh token do LocalStorage ao fazer logout
    this.errorMessage = '';
  }

  private saveTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.tokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  private removeTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }

  // Array de usuários simulado (substitua por um banco de dados ou autenticação real)
  private users = [
    { username: 'admin', password: '123', accessToken: 'token_admin', refreshToken: 'refresh_admin' },
    { username: 'user', password: '456', accessToken: 'token_user', refreshToken: 'refresh_user' }
    // Adicione outros usuários aqui, se necessário
  ];

  // Implementação do refresh token (substitua por chamadas reais ao servidor)
  private async refreshAccessToken(): Promise<string> {
    const refreshToken = this.getRefreshToken();
    if (refreshToken) {
      try {
        // Simulação de uma requisição ao servidor para obter um novo token de acesso usando o token de atualização
        const newAccessToken = await this.makeRefreshTokenRequest(refreshToken);
        this.saveTokens(newAccessToken, refreshToken);
        return newAccessToken;
      } catch (error) {
        // Em caso de falha, trate o erro de acordo com sua necessidade.
        throw new Error('Não foi possível obter um novo token de acesso.');
      }
    } else {
      throw new Error('Refresh token não encontrado.');
    }
  }

  // Simulação de uma requisição ao servidor para obter um novo token de acesso usando o token de atualização
  private makeRefreshTokenRequest(refreshToken: string): Promise<string> {
    return new Promise<string>((resolve) => {
      // Simulação de uma requisição ao servidor com delay de 1 segundo
      setTimeout(() => {
        // Neste exemplo, o novo token de acesso é simplesmente um novo valor baseado no token de atualização
        const newAccessToken = `new_access_token_${refreshToken}`;
        resolve(newAccessToken);
      }, 1000);
    });
  }
}
