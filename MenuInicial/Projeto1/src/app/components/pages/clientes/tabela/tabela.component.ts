import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteIdService } from '../services/cliente-id.service';

@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  
  tarefas: any[] = []; // Array para armazenar os dados dos clientes
  emModoEdicao: boolean = false; // Adicione a variável de modo de edição
  dadosFormulario: any = {}; // Dados do formulário

  constructor(
    private router: Router,
    private clienteIdService: ClienteIdService
  ) { }
  
  ngOnInit() {
    // Ao inicializar o componente, busque os clientes da API
    this.getClientes();
  }

  getClientes() {
    this.clienteIdService.getClientes().subscribe(
      (response) => {
        // Armazene os dados dos clientes na variável 'tarefas'
        this.tarefas = response;
      },
      (error) => {
        console.error('Erro ao buscar clientes:', error);
        // Lógica adicional para lidar com erros, como exibição de mensagem de erro, pode ser adicionada aqui.
      }
    );
  }

  navegarParaInformation(id: number) {
    // Exibe o ID do cliente no console (não é um endereço IP)
    console.log('ID do cliente:', id);

    // Defina o modo de edição como false (visualização)
    this.emModoEdicao = false;

    // Chame o método do serviço e passe o ID como argumento
    this.clienteIdService.setIdSelecionado(id);

    // Redirecione para a página do formulário com o ID como parte da URL
    this.router.navigate(['/home/clientes/menu-info/information']);
  }

  alternarEdicao() {
    // Alterne o modo de edição entre true e false
    this.emModoEdicao = !this.emModoEdicao;
  }
}
