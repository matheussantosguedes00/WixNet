import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'produtos',
  templateUrl: './link-produtos.component.html',
  styleUrls: ['./link-produtos.component.css']
})
export class LinkProdutosComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      item: ['', Validators.required],
      codigoProduto: ['', Validators.required],
      unidadeMedida: ['', Validators.required],
      estoqueMinimo: ['', Validators.required],
      custoUnitario: ['', Validators.required],
      km: ['', Validators.required],
      modelo: ['', Validators.required],
      serialNumero: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aqui você pode fazer a lógica para enviar os dados para o servidor, por exemplo.
    }
  }
}
