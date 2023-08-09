import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  icon: string = ''; // Variável para armazenar um ícone
  tema: number = 0; // Variável para armazenar o tema selecionado
  menuAberto = true; // Variável para controlar se o menu está aberto ou não
  activeIcon: number = 0; // Variável para armazenar o ícone ativo
  isModoAtivado: boolean = false; // Variável para armazenar se o modo escuro está ativado ou não

  ngOnInit() {
    this.carregarTemaDoBancoDeDados(); // Chama a função para carregar o tema do banco de dados
    this.aplicarTema(); // Chama a função para aplicar o tema carregado
  }

  activateIcon(iconIndex: number) {
    this.activeIcon = iconIndex; // Define o ícone ativo com base no índice passado
    localStorage.setItem('activeIcon', JSON.stringify(iconIndex)); // Armazena o ícone ativo no armazenamento local
  }

  private carregarTemaDoBancoDeDados() {
    this.tema = 3; // Simula o carregamento do tema do banco de dados (valor fixo para exemplo)
  }

  private aplicarTema() {
    // Remove todas as classes de tema do elemento raiz do documento
    //document.documentElement.classList.remove('modo-claro', 'modo-escuro', 'nasaModoClaro', 'nasaModoEscuro');

    // Adiciona a classe de tema correspondente com base no valor de 'this.tema'
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
    //this.tema = (this.tema % 4) + 1; // Alterna entre os valores de 1 a 4
    
    this.isModoAtivado = !this.isModoAtivado; // Inverte o estado do modo escuro
    this.aplicarTema(); // Aplica o novo tema
    localStorage.setItem('activeIcon', JSON.stringify(this.isModoAtivado)); // Armazena o estado do modo escuro no armazenamento local
  }
}
