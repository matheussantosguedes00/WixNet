import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'loja',
  templateUrl: './link-loja.component.html',
  styleUrls: ['./link-loja.component.css']
})
export class LinkLojaComponent {
  formulario: FormGroup;
  lojas: any[] = []; // Lista de lojas
  lojaParaEditar: any = null; // Loja a ser editada (inicializada como null)

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      loja: [''],
      telefone: [''],
      email: [''],
      endereco: [''],
      totalVendido: ['']
    });

    // Exemplo: Adicionar algumas lojas à lista
    this.lojas.push(
      {
        loja: 'Loja A',
        telefone: '111-111-1111',
        email: 'lojaA@example.com',
        endereco: 'Rua Principal, 123',
        totalVendido: 10000
      },
      {
        loja: 'Loja B',
        telefone: '222-222-2222',
        email: 'lojaB@example.com',
        endereco: 'Avenida Secundária, 456',
        totalVendido: 15000
      }
      // Adicione mais lojas se necessário
    );
  }

  editarLoja(index: number) {
    this.lojaParaEditar = this.lojas[index];
    this.formulario.patchValue(this.lojaParaEditar);
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      if (this.lojaParaEditar !== null) {
        const index = this.lojas.indexOf(this.lojaParaEditar);
        this.lojas[index] = this.formulario.value;
        this.lojaParaEditar = null;
      } else {
        this.lojas.push(this.formulario.value);
      }
      this.formulario.reset();
    }
  }

  excluirLoja(index: number) {
    this.lojas.splice(index, 1);
  }
}
