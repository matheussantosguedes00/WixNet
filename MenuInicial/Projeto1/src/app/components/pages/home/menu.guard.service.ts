import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home.component';

@Injectable({
  providedIn: 'root',
})
export class MenuGuard implements CanActivate {
  constructor(private homeComponent: HomeComponent) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verifica se a rota ativa é "/clientes/formulario"
    const isFormularioRoute = state.url === '/clientes/formulario';

    // Atualiza o estado do menu com base na rota ativa
    this.homeComponent.menuAberto = !isFormularioRoute;

    return true; // Permite a navegação sempre
  }
}
