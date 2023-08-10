import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'produtos',
  templateUrl: './link-produtos.component.html',
  styleUrls: ['./link-produtos.component.css']
})
export class LinkProdutosComponent {
  formulario: FormGroup;
  produtos: any[] = [];
  produtoParaEditar: any = null; // Inicialize como null para não preencher o formulário por padrão
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      item: [''],
      km: [''],
      estoqueMinimo: [''],
      codigoProduto: [''],
      modelo: [''],
      custoUnitario: [''],
      unidadeMedida: [''],
      serialNumero: ['']
    });

    // Adicionar alguns produtos à lista como exemplo
    this.produtos.push(
      {
        item: 'Produto 1',
        km: 100,
        estoqueMinimo: 10,
        codigoProduto: 'P123',
        modelo: 'Modelo A',
        custoUnitario: 50.00,
        unidadeMedida: 'Unidade',
        serialNumero: 'SN123'
      },
      {
        item: 'Produto 2',
        km: 200,
        estoqueMinimo: 20,
        codigoProduto: 'P456',
        modelo: 'Modelo B',
        custoUnitario: 70.00,
        unidadeMedida: 'Unidade',
        serialNumero: 'SN456'
      }
      // Adicione mais produtos se necessário
    );
  }

 

  editarProduto(index: number) {
    this.produtoParaEditar = this.produtos[index];
    this.formulario.patchValue(this.produtoParaEditar);
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      if (this.produtoParaEditar !== null) {
        const index = this.produtos.indexOf(this.produtoParaEditar);
        this.produtos[index] = this.formulario.value;
        this.produtoParaEditar = null;
      } else {
        this.produtos.push(this.formulario.value);
      }
      this.formulario.reset();
    }
  }
  excluirProduto(index: number) {
    this.produtos.splice(index, 1);
  }
}
 

