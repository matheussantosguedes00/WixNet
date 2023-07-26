import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css'],
})
export class PainelControleComponent {
  cardsData: any[] = [];

  constructor() {
    // Simulando a obtenção de dados da API fictícia (pode ser substituído por uma chamada HTTP real)
    this.getCardsData();
  }

  getCardsData() {
    // Simulando os dados obtidos da API
    const apiResponse = [
      { 
        id: 1, 
        title: 'Card 1', 
        description: 'Descrição do Card 1',
        content: 'Conteúdo do Card 1'
      },
      { 
        id: 2, 
        title: 'Card 2', 
        description: 'Descrição do Card 2',
        content: 'Conteúdo do Card 2'
      },
      { 
        id: 3, 
        title: 'Card 3', 
        description: 'Descrição do Card 3',
        content: 'Conteúdo do Card 3'
      },
      { 
        id: 4, 
        title: 'Card 4', 
        description: 'Descrição do Card 4',
        content: 'Conteúdo do Card 4'
      },
      { 
        id: 5, 
        title: 'Card 5', 
        description: 'Descrição do Card 5',
        content: 'Conteúdo do Card 5'
      },
      { 
        id: 6, 
        title: 'Card 6', 
        description: 'Descrição do Card 6',
        content: 'Conteúdo do Card 6'
      },
      { 
        id: 7, 
        title: 'Card Maior', 
        description: 'Descrição do Card 7',
        content: 'Conteúdo do Card 7'
      }
    ];

    // Atribuindo os dados obtidos da API à variável cardsData
    this.cardsData = apiResponse;
  }
}
