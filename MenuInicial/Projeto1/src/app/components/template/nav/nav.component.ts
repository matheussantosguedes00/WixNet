import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  permissions = [
    { name: 'home', permission: true },
    { name: 'clientes', permission: true },
  ];
  moduloHome = false;
  moduloCliente = false;

  menuAberto = true;

  activeIcon: number = 0;

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

  activateIcon(iconIndex: number) {
    this.activeIcon = iconIndex;
  }

  icon: string = '';

  isModoEscuroAtivado: boolean = false;

  ngOnInit() {
    this.mapPermissions(this.permissions);
  }

  alternarModoTema() {
    this.isModoEscuroAtivado = !this.isModoEscuroAtivado;
  
    if (this.isModoEscuroAtivado) {
      document.documentElement.classList.add('modo-escuro');
      document.documentElement.classList.remove('modo-claro');
    } else {
      document.documentElement.classList.add('modo-claro');
      document.documentElement.classList.remove('modo-escuro');
    }
  
    // Salvar o estado do modo escuro no LocalStorage
    localStorage.setItem(
      'modoEscuro',
      JSON.stringify(this.isModoEscuroAtivado)
    );
  }
}
