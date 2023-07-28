import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Projeto1';
  menuAberto = true;
  larguraTela: number=0;

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  ngOnInit() {
    // Obtém a largura da tela no carregamento inicial
    this.larguraTela = window.innerWidth;
    // Verifica se o menu deve ser fechado no carregamento inicial com base na largura da tela
    this.atualizarMenu();
  }

  // Ouve eventos de redimensionamento da janela e atualiza a largura da tela
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.larguraTela = event.target.innerWidth;
    // Atualiza o estado do menu sempre que a janela for redimensionada
    this.atualizarMenu();
  }

  // Método para atualizar o estado do menu com base na largura da tela
  atualizarMenu() {
    if (this.larguraTela <= 600) {
      this.menuAberto = false;
    } else {
      this.menuAberto = true;
    }
  }
}
