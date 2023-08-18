import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LojaService } from './loja.service.service'; // Importe o serviço de lojas correspondente

@Component({
  selector: 'loja',
  templateUrl: './link-loja.component.html',
  styleUrls: ['../style.css']
})
export class LinkLojaComponent implements OnInit {
  formulario: FormGroup;
  lojas: any[] = [];
  lojaParaEditar: any = null;
  indiceLojaSelecionada: number = -1;
  mensagemSucesso: string = '';
  mensagemErro: string = '';
  mostrarErro: boolean = false;

  constructor(private fb: FormBuilder, private lojasService: LojaService) {
    this.formulario = this.fb.group({
      loja: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      endereco: ['', Validators.required],
      totalVendido: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarLojas();
  }

  carregarLojas() {
    this.lojasService.getLojas().subscribe((lojas) => {
      this.lojas = lojas;
      // Realize a ordenação das lojas se necessário
      console.log(this.lojas);
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const loja = this.formulario.value;
      if (this.lojaParaEditar !== null && this.lojaParaEditar.id) {
        this.lojasService.atualizarLoja(this.lojaParaEditar.id, loja).subscribe(() => {
          this.lojaParaEditar = null;
          this.formulario.reset();
          this.carregarLojas();

          const mensagem = 'Loja editada com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      } else {
        this.lojasService.adicionarLoja(loja).subscribe(() => {
          this.formulario.reset();
          this.carregarLojas();

          const mensagem = 'Loja cadastrada com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      }
    }
  }

  editarLoja(index: number) {
    this.indiceLojaSelecionada = index;
    const lojaSelecionada = this.lojas[index];
    if (lojaSelecionada && lojaSelecionada.id) {
      this.lojaParaEditar = { ...lojaSelecionada };
      this.formulario.setValue({
        loja: this.lojaParaEditar.Loja,
        telefone: this.lojaParaEditar.Telefone,
        email: this.lojaParaEditar.Email,
        endereco: this.lojaParaEditar.Endereco,
        totalVendido: this.lojaParaEditar.TotalVendido,
      });
    }
  }

  cancelarEdicao() {
    this.indiceLojaSelecionada = -1;
    this.lojaParaEditar = null;
    this.formulario.reset();
  }

  excluirLoja(index: number) {
    const loja = this.lojas[index];
    this.lojasService.excluirLoja(loja.id).subscribe(() => {
      this.carregarLojas();

      const mensagem = 'Loja excluída com sucesso!';
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
