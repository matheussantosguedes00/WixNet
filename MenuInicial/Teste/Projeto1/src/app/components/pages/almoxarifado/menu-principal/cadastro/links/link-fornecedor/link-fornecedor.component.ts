import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FornecedorService } from './fornecedor.service.service'; // Importe o serviço de fornecedores correspondente

@Component({
  selector: 'fornecedor',
  templateUrl: './link-fornecedor.component.html',
  styleUrls: ['../style.css']
})
export class LinkFornecedorComponent implements OnInit {
  formulario: FormGroup;
  fornecedores: any[] = [];
  fornecedorParaEditar: any = null;
  indiceFornecedorSelecionado: number = -1;
  mensagemSucesso: string = '';
  mensagemErro: string = '';
  mostrarErro: boolean = false;

  constructor(private fb: FormBuilder, private fornecedoresService: FornecedorService) {
    this.formulario = this.fb.group({
      empresa: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      totalCompras: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarFornecedores();
  }

  carregarFornecedores() {
    this.fornecedoresService.getFornecedores().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
      // Realize a ordenação dos fornecedores se necessário
      console.log(this.fornecedores);
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const fornecedor = this.formulario.value;
      if (this.fornecedorParaEditar !== null && this.fornecedorParaEditar.id) {
        this.fornecedoresService.atualizarFornecedor(this.fornecedorParaEditar.id, fornecedor).subscribe(() => {
          this.fornecedorParaEditar = null;
          this.formulario.reset();
          this.carregarFornecedores();

          const mensagem = 'Fornecedor editado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      } else {
        this.fornecedoresService.adicionarFornecedor(fornecedor).subscribe(() => {
          this.formulario.reset();
          this.carregarFornecedores();

          const mensagem = 'Fornecedor cadastrado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      }
    }
  }

  editarFornecedor(index: number) {
    this.indiceFornecedorSelecionado = index;
    const fornecedorSelecionado = this.fornecedores[index];
    if (fornecedorSelecionado && fornecedorSelecionado.id) {
      this.fornecedorParaEditar = { ...fornecedorSelecionado };
      this.formulario.setValue({
        empresa: this.fornecedorParaEditar.Empresa,
        telefone: this.fornecedorParaEditar.Telefone,
        email: this.fornecedorParaEditar.Email,
        totalCompras: this.fornecedorParaEditar.TotalCompras,
      });
    }
  }

  cancelarEdicao() {
    this.indiceFornecedorSelecionado = -1;
    this.fornecedorParaEditar = null;
    this.formulario.reset();
  }

  excluirFornecedor(index: number) {
    const fornecedor = this.fornecedores[index];
    this.fornecedoresService.excluirFornecedor(fornecedor.id).subscribe(() => {
      this.carregarFornecedores();

      const mensagem = 'Fornecedor excluído com sucesso!';
      this.mostrarMensagemDeErro(mensagem);
    });
  }

  mostrarMensagemDeErro(mensagem: string) {
    this.mensagemErro = mensagem;
    this.mostrarErro = true;

    setTimeout(() => {
      this.mostrarErro = false;
      this.mensagemErro = '';
    }, 3000);
  }
}
