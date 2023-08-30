import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Projeto1';
  menuAberto = true;
  larguraTela: number = 0;

  constructor(private router: Router) {}

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
    console.log('Menu alternado');
  }

  ngOnInit() {
    // Obtém a largura da tela no carregamento inicial
    this.larguraTela = window.innerWidth;
    // Verifica se o menu deve ser fechado no carregamento inicial com base na largura da tela
    this.atualizarMenu();

    // Ouve eventos de mudança de rota para atualizar o menu quando a rota muda
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizarMenu();
      }
    });
  }

  // Ouve eventos de redimensionamento da janela e atualiza a largura da tela
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.larguraTela = event.target.innerWidth;
    // Atualiza o estado do menu sempre que a janela for redimensionada
    this.atualizarMenu();
  }

  // Método para atualizar o estado do menu com base na largura da tela e na URL atual
  atualizarMenu() {
    if (this.larguraTela <= 600 || this.router.url === '/home/clientes/formulario') {
      // Se a largura da tela for menor ou igual a 600 OU se estiver na página '/home/clientes/formulario',
      // o menu deve ficar fechado
      this.menuAberto = false;
    } else {
      // Para todas as outras páginas e larguras de tela maiores que 600 pixels, o menu deve estar aberto
      this.menuAberto = true;
    }
  }
}
