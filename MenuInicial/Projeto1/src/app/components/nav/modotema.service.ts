import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModotemaService {



  private renderer: Renderer2;
  private isModoEscuro: boolean;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.isModoEscuro = false; // Defina como 'false' para ativar o modo claro inicialmente
  }

  ativarModoEscuro() {
    this.renderer.addClass(document.documentElement, 'modo-escuro');
    this.renderer.removeClass(document.documentElement, 'modo-claro');
    this.isModoEscuro = true;
   
  }

  ativarModoClaro() {
    this.renderer.addClass(document.documentElement, 'modo-claro');
    this.renderer.removeClass(document.documentElement, 'modo-escuro');
    this.isModoEscuro = false;
  }

  obterModoAtual(): boolean {
    return this.isModoEscuro;
  }
}
