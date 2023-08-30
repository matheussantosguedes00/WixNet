import { Component, OnInit } from '@angular/core';
import { ClienteIdService } from '../../../services/cliente-id.service';

@Component({
  selector: 'information',
  templateUrl: './info-editer.component.html',
  styleUrls: ['./info-editer.component.css']
})

export class InfoEditerComponent implements OnInit {
  emModoEdicao = false;
  dadosFormulario: any = {};

  constructor(private clienteIdService: ClienteIdService) {}

  ngOnInit() {
    const idSelecionado = this.clienteIdService.idSelecionado;

    if (idSelecionado) {
      this.clienteIdService.getClientePorId(idSelecionado).subscribe(
        (cliente) => {
          this.dadosFormulario = {
            id: 'Wix-'+cliente.id,
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
        }
      );
    }
  }
}
