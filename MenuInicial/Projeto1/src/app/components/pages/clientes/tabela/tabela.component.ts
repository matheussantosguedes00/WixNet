import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  constructor(private router: Router) {}
  navegarParaInformation() {
    this.router.navigate(['/home/clientes/menu-info/information']);
}
  tarefas = [
    {  // Substitua isso pelos dados reais do seu cliente
      nome: 'ClienteX',
      id: 1,
      nomeFantasia: 'Empresa ABC',
      razaoSocial: 'Razão Social Ltda',
      cnpj: '12.345.678/0001-90',
      endereco: 'Rua da Empresa, 123',
      cep: '12345-678',
      cidade: 'Cidade',
      estado: 'UF'
    },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    { nome: 'Cliente 1', id: 1 },
    { nome: 'Cliente 2', id: 2 },
    { nome: 'Cliente 3', id: 3 },
    // Adicione mais dados aqui conforme necessário
  ];
  
}
