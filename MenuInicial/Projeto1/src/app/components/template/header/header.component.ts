import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  gerarNotificacoes(): any[] {
    let notificacoes: any[] = [
      { texto: 'Notificação 1' },
      { texto: 'Notificação 2' },
    ];

    return notificacoes;
  }

  // Exemplo de uso
  notifications: any[] = this.gerarNotificacoes();
}
