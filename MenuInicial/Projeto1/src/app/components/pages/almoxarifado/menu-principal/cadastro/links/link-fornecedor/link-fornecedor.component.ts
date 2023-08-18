import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fornecedor',
  templateUrl: './link-fornecedor.component.html',
  styleUrls: ['./link-fornecedor.component.css']
})
export class LinkFornecedorComponent {
  formulario: FormGroup;
  fornecedores: any[] = []; // Atualizado para 'fornecedores'
  fornecedorParaEditar: any = null; // Inicialize como null para não preencher o formulário por padrão

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      empresa: [''],
      telefone: [''],
      email: [''],
      totalCompras: [''],
    });

    // Adicione alguns fornecedores à lista como exemplo
    this.fornecedores.push(
      {
        empresa: 'Fornecedor 1',
        telefone: '123456789',
        email: 'fornecedor1@example.com',
        totalCompras: 5000,
     
      },
      {
        empresa: 'Fornecedor 2',
        telefone: '987654321',
        email: 'fornecedor2@example.com',
        totalCompras: 8000,
  
      }
      // Adicione mais fornecedores se necessário
    );
  }

  editarFornecedor(index: number) {
    this.fornecedorParaEditar = this.fornecedores[index];
    this.formulario.patchValue(this.fornecedorParaEditar);
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      if (this.fornecedorParaEditar !== null) {
        const index = this.fornecedores.indexOf(this.fornecedorParaEditar);
        this.fornecedores[index] = this.formulario.value;
        this.fornecedorParaEditar = null;
      } else {
        this.fornecedores.push(this.formulario.value);
      }
      this.formulario.reset();
    }
  }

  excluirFornecedor(index: number) {
    this.fornecedores.splice(index, 1);
  }
}
