import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteIdService } from '../services/cliente-id.service'; 
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: '/formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  

  constructor(private router: Router, private clienteIdService: ClienteIdService) {}

  novoCliente: any = {};
  exibirMensagemCarregamento: boolean = false;
  cadastroConcluido: boolean = false;
  classesDeCarregamento: string[] = [
    'clock_loader_10',
    'clock_loader_20',
    'clock_loader_40',
    'clock_loader_60',
    'clock_loader_80',
    'clock_loader_90'
  ];

  indiceExibicao: number = 0;

  adicionarCliente() {
    // Desabilitar o botão enquanto a operação está em andamento
    this.exibirMensagemCarregamento = true;
    this.cadastroConcluido = false;
  
    this.clienteIdService.adicionarCliente(this.novoCliente).subscribe(
      (response) => {
        console.log('Cliente adicionado com sucesso:', response);
        
        // Limpe o formulário
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
        
        // Simule o carregamento progressivo
        const interval = setInterval(() => {
          if (this.indiceExibicao < this.classesDeCarregamento.length) {
            this.indiceExibicao++;
          } else {
            // Quando chegarmos ao final, pare o intervalo
            clearInterval(interval);
            this.exibirMensagemCarregamento = false;
            this.cadastroConcluido = true;
            setTimeout(() => {
              this.cadastroConcluido = false;
            }, 1500);
          }
        }, 250); // Troque o valor de interval conforme necessário
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