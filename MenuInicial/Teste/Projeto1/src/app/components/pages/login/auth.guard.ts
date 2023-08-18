import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService:AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Se o usuário não estiver autenticado, redirecionar para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
