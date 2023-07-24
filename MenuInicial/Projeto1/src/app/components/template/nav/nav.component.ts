import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  icon: string = '';
  isModoEscuroAtivado: boolean = false;
  menuAberto = true;
  activeIcon: number = 0;

  ngOnInit() {
    this.carregarEstadoDoLocalStorage();
    //this.aplicarModoEscuro();manter o modo escuro
  }

  activateIcon(iconIndex: number) {
    this.activeIcon = iconIndex;
    localStorage.setItem('activeIcon', JSON.stringify(iconIndex));
  }

  alternarModoTema() {
    this.isModoEscuroAtivado = !this.isModoEscuroAtivado;
    this.aplicarModoEscuro();
    localStorage.setItem('modoEscuro', JSON.stringify(this.isModoEscuroAtivado));
  }

  private carregarEstadoDoLocalStorage() {
    const storedIcon = localStorage.getItem('activeIcon');
    if (storedIcon) {
      this.activeIcon = JSON.parse(storedIcon);
    }

    const storedModoEscuro = localStorage.getItem('modoEscuro');
    if (storedModoEscuro) {
      this.isModoEscuroAtivado = JSON.parse(storedModoEscuro);
    }
  }

  private aplicarModoEscuro() {
    if (this.isModoEscuroAtivado) {
      document.documentElement.classList.add('modo-escuro');
      document.documentElement.classList.remove('modo-claro');
    } else {
      document.documentElement.classList.add('modo-claro');
      document.documentElement.classList.remove('modo-escuro');
    }
  }
}
/*permissions = [
    { name: 'home', permission: true },
    { name: 'clientes', permission: true },
  ];
  moduloHome = false;
  moduloCliente = false;
  
  mapPermissions(permissions: any[]) {
    permissions.forEach((modulo) => {
      if (modulo.name === 'home') {
        this.moduloHome = modulo.permission;
      }

      if (modulo.name === 'clientes') {
        this.moduloCliente = modulo.permission;
      }
    });
  }
  ngOnInit() {
    this.mapPermissions(this.permissions);

 no html  *ngIf="moduloCliente"
 *ngIf="moduloHome"
  }
*/
