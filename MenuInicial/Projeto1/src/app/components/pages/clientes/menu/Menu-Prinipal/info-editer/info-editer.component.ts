import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteIdService } from '../../../services/cliente-id.service';

@Component({
  selector: 'information',
  templateUrl: './info-editer.component.html',
  styleUrls: ['./info-editer.component.css']
})

export class InfoEditerComponent implements OnInit {
  modoEdicao = false;
  dadosFormulario: any = {};
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
   

  constructor(private clienteIdService: ClienteIdService, private router: Router) {}

  ngOnInit() {
    const idSelecionado = this.clienteIdService.idSelecionado;

    if (idSelecionado) {
      this.clienteIdService.getClientePorId(idSelecionado).subscribe(
        (cliente) => {
          const textoAntesDoId = "Wix-";
          this.dadosFormulario = {
           
              id: textoAntesDoId+ cliente.id,
              apelido: cliente.apelido,
              razaoSocial: cliente.razaoSocial,
              nomeFantasia: cliente.nomeFantasia,
              cnpj: cliente.cnpj,
              endereco: cliente.endereco,
              cep: cliente.cep,
              estado: cliente.estado,
              cidade: cliente.cidade
          };
        },
        (error) => {
          console.error('Erro ao obter informações do cliente:', error);
          
          // Configura a mensagem de erro ao receber informações do cliente
          this.mensagemErro = 'Erro ao obter informações do cliente. Por favor, tente novamente mais tarde.';
        }
      );
    }
  }

  salvarEdicao() {
    // Remove o texto "Wix-" do valor do id antes de enviar para atualização
    this.dadosFormulario.id = this.dadosFormulario.id.replace('Wix-', '');

    this.clienteIdService.atualizarCliente(this.dadosFormulario).subscribe(
        (response) => {
            console.log('Cliente atualizado com sucesso:', response);
            this.modoEdicao = false;
            this.mensagemSucesso = 'Cadastro atualizado com sucesso!';
            this.mensagemErro = null;
 // Adiciona novamente o texto "Wix-" ao valor do id após a atualização
 this.dadosFormulario.id = 'Wix-' + this.dadosFormulario.id;
            setTimeout(() => {
                this.mensagemSucesso = null;
            }, 2000);
        },
        (error) => {
            console.error('Erro ao atualizar cliente:', error);
            this.mensagemErro = 'Erro ao atualizar cliente. Por favor, verifique os dados e tente novamente.';
            setTimeout(() => {
                this.mensagemErro = null;
            }, 3000);
            this.mensagemSucesso = null;
        }
    );
}

  cancelarEdicao() {
    this.modoEdicao = false;
    this.mensagemErro = null;
  }
  excluirCliente() {
    if (this.clienteIdService.idSelecionado) {
      if (confirm('Tem certeza de que deseja excluir este cliente?')) {
        this.clienteIdService.excluirCliente(this.clienteIdService.idSelecionado).subscribe(
          () => {
            console.log('Cliente excluído com sucesso');
            this.modoEdicao = false;
            this.mensagemSucesso = 'Cliente excluído com sucesso!';
            this.mensagemErro = null;
    
            setTimeout(() => {
              this.mensagemSucesso = null;
            }, 2000);

            setTimeout(() => {
              this.router.navigate(['/home/clientes/tabela']); // Redireciona para a página de clientes após a exclusão
            }, 2500);
           
          },
          (error) => {
            console.error('Erro ao excluir cliente:', error);
            // Trate o erro conforme necessário
            this.mensagemErro = 'Erro ao excluir cliente!';
            setTimeout(() => {
              this.mensagemErro= null;
            }, 3000);
            this.mensagemSucesso = null;
          }
        );
      }
    } else {
      console.error('ID do cliente não definido.');
      // Lida com a situação em que o ID do cliente não está definido
    }
  }
  

  sairPagina(): void {
    this.router.navigate(['/home/clientes/tabela']);
  }
}
