import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = ''; // Variável para armazenar a mensagem de erro

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(username: string, password: string): void {
    if (this.authService.login(username, password)) {
      // Autenticação bem-sucedida, redirecionar para a página protegida (home)
      this.router.navigate(['/home/app-painel-controle']);
    } else {
      // Armazenar a mensagem de erro do serviço no componente
      this.errorMessage = this.authService.getErrorMessage();
    
    }
  }
}
