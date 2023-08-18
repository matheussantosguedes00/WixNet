import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LojaService } from './loja.service.service'; // Importe o serviço de lojas correspondente

@Component({
  selector: 'loja',
  templateUrl: './link-loja.component.html',
  styleUrls: ['../style.css']
})
export class LinkLojaComponent implements OnInit {
  formulario: FormGroup; // O formulário reativo para entrada de dados
  lojas: any[] = []; // Array para armazenar as lojas
  lojaParaEditar: any = null; // Informações da loja que está sendo editada
  indiceLojaSelecionada: number = -1; // Índice da loja selecionada para edição
  mensagemSucesso: string = ''; // Mensagem de sucesso exibida temporariamente
  mensagemErro: string = ''; // Mensagem de erro exibida temporariamente
  mostrarErro: boolean = false; // Flag para controlar a exibição da mensagem de erro

  constructor(private fb: FormBuilder, private lojasService: LojaService) {
    // Criação do formulário reativo com campos e validações
    this.formulario = this.fb.group({
      loja: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      endereco: ['', Validators.required],
      totalVendido: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarLojas(); // Carrega as lojas ao inicializar o componente
  }

  // Método para carregar as lojas da API e atualizar o array
  carregarLojas() {
    this.lojasService.getLojas().subscribe((lojas) => {
      this.lojas = lojas;
      // Realize a ordenação das lojas se necessário
      console.log(this.lojas);
    });
  }

  // Método para enviar o formulário e adicionar ou atualizar uma loja
  enviarFormulario() {
    if (this.formulario.valid) {
      const loja = this.formulario.value;
      if (this.lojaParaEditar !== null && this.lojaParaEditar.id) {
        // Atualiza os dados da loja existente
        this.lojasService.atualizarLoja(this.lojaParaEditar.id, loja).subscribe(() => {
          this.lojaParaEditar = null;
          this.formulario.reset();
          this.carregarLojas();

          const mensagem = 'Loja editada com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      } else {
        // Adiciona uma nova loja
        this.lojasService.adicionarLoja(loja).subscribe(() => {
          this.formulario.reset();
          this.carregarLojas();

          const mensagem = 'Loja cadastrada com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      }
    }
  }

  // Método para carregar os dados de uma loja para edição
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

  // Método para cancelar a edição de uma loja
  cancelarEdicao() {
    this.indiceLojaSelecionada = -1;
    this.lojaParaEditar = null;
    this.formulario.reset();
  }

  // Método para excluir uma loja
  excluirLoja(index: number) {
    const loja = this.lojas[index];
    this.lojasService.excluirLoja(loja.id).subscribe(() => {
      this.carregarLojas();

      const mensagem = 'Loja excluída com sucesso!';
      this.mostrarMensagemDeErro(mensagem);
    });
  }

  // Método para exibir a mensagem de erro temporariamente
  mostrarMensagemDeErro(mensagem: string) {
    this.mensagemErro = mensagem;
    this.mostrarErro = true;

    setTimeout(() => {
      this.mostrarErro = false;
      this.mensagemErro = '';
    }, 3000); // Exibir a mensagem de erro por 3 segundos
  }
}
