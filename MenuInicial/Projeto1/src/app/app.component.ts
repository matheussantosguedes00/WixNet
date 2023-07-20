import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Projeto1';
  isModoEscuroAtivado = false;

  ngOnInit() {
    // Verificar o estado do modo escuro no LocalStorage
    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    this.isModoEscuroAtivado = modoEscuroSalvo
      ? JSON.parse(modoEscuroSalvo)
      : false;
    //this.aplicarModoTema();
  }

  alternarModoTema() {
    // O mesmo código da sua função alternarModoTema() aqui
    this.isModoEscuroAtivado = !this.isModoEscuroAtivado;

    if (this.isModoEscuroAtivado) {
      document.documentElement.classList.add('modo-escuro');
      document.documentElement.classList.remove('modo-claro');
    } else {
      document.documentElement.classList.add('modo-claro');
      document.documentElement.classList.remove('modo-escuro');
    }
    localStorage.setItem(
      'modoEscuro',
      JSON.stringify(this.isModoEscuroAtivado)
    );
  }

  aplicarModoTema() {
    // O mesmo código da sua função aplicarModoTema() aqui
    if (this.isModoEscuroAtivado) {
      document.documentElement.classList.add('modo-escuro');
      document.documentElement.classList.remove('modo-claro');
    } else {
      document.documentElement.classList.add('modo-claro');
      document.documentElement.classList.remove('modo-escuro');
    }
  }
}
