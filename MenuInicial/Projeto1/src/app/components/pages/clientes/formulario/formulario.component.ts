import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../services/dados.service';

@Component({
  selector: '/formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private router: Router, private clientesService: ClientesService) {}
  novoCliente: any = {};
  clienteAdicionado: boolean = false; // Flag para exibir a mensagem de sucesso

  adicionarCliente() {
    // Desabilitar o botão enquanto a operação está em andamento
    this.clienteAdicionado = false;
  
    this.clientesService.adicionarCliente(this.novoCliente).subscribe(
      (response) => {
        console.log('Cliente adicionado com sucesso:', response);
        // Limpe o formulário e exiba a mensagem de sucesso
        this.novoCliente = {
          apelido: '',
          razaoSocial: '',
          nomeFantasia: '',
          cnpj: '',
          cidade: '',
          cep: '',
          estado: '',
          endereco: ''
        };
        this.clienteAdicionado = true;
      },
      (error) => {
        console.error('Erro ao adicionar cliente:', error);
        // Lógica adicional para lidar com erros, como exibição de mensagem de erro, pode ser adicionada aqui.
      }
    );
  }

  sairPagina(): void {
    // Redireciona de volta para a página de tabela de clientes
    this.router.navigate(['/home/clientes/tabela']);
  }
}
