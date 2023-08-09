import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  icon: string = '';
  tema: number = 0;
  menuAberto = true;
  activeIcon: number = 0;
  isModoAtivado: boolean = false; // Adicionando a propriedade isModoEscuroAtivado

  ngOnInit() {
    this.carregarTemaDoBancoDeDados();
    this.aplicarTema();
  }

  activateIcon(iconIndex: number) {
    this.activeIcon = iconIndex;
    localStorage.setItem('activeIcon', JSON.stringify(iconIndex));
  }

  private carregarTemaDoBancoDeDados() {
    this.tema = 1;
  }

  private aplicarTema() {
    document.documentElement.classList.remove('modo-claro', 'modo-escuro', 'nasaModoClaro', 'nasaModoEscuro');
    
    if (this.tema === 1) {
      document.documentElement.classList.add('modo-claro');
    } else if (this.tema === 2) {
      document.documentElement.classList.add('modo-escuro');
    } else if (this.tema === 3) {
      document.documentElement.classList.add('nasaModoClaro');
    } else if (this.tema === 4) {
      document.documentElement.classList.add('nasaModoEscuro');
    }
  }

  alternarModoTema() {
    this.tema = (this.tema % 4) + 1;
    this.isModoAtivado = !this.isModoAtivado;
    this.aplicarTema();
    localStorage.setItem('modoEscuro', JSON.stringify(this.isModoAtivado));
  }
}
