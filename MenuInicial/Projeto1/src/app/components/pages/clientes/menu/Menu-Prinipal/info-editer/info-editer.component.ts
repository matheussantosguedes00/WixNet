import { Component,  Input} from '@angular/core';

@Component({
  selector: 'information',
  templateUrl: './info-editer.component.html',
  styleUrls: ['./info-editer.component.css']
})




export class InfoEditerComponent {
 

  emModoEdicao = false;
  dadosFormulario = {
    apelido: 'Empresa XYZ',
    id: 'WIX-01',
    razaoSocial: 'Razão Social da Empresa',
    nomeFantasia: 'Nome Fantasia da Empresa',
    cnpj: '12.345.678/0001-90',
    endereco: 'Rua da Empresa, 123',
    cep: '12345-678',
    estado: 'MG',
    cidade: 'Passos'
  };
  



}
