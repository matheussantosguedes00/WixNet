import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FornecedorService } from './fornecedor.service.service'; // Importe o serviço de fornecedores correspondente

@Component({
  selector: 'fornecedor',
  templateUrl: './link-fornecedor.component.html',
  styleUrls: ['../style.css']
})
export class LinkFornecedorComponent implements OnInit {
  formulario: FormGroup; // O formulário reativo para entrada de dados
  fornecedores: any[] = []; // Array para armazenar os fornecedores
  fornecedorParaEditar: any = null; // Informações do fornecedor que está sendo editado
  indiceFornecedorSelecionado: number = -1; // Índice do fornecedor selecionado para edição
  mensagemSucesso: string = ''; // Mensagem de sucesso exibida temporariamente
  mensagemErro: string = ''; // Mensagem de erro exibida temporariamente
  mostrarErro: boolean = false; // Flag para controlar a exibição da mensagem de erro

  constructor(private fb: FormBuilder, private fornecedoresService: FornecedorService) {
    // Criação do formulário reativo com campos e validações
    this.formulario = this.fb.group({
      empresa: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      totalCompras: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarFornecedores(); // Carrega os fornecedores ao inicializar o componente
  }

  // Método para carregar os fornecedores da API e atualizar o array
  carregarFornecedores() {
    this.fornecedoresService.getFornecedores().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
      // Realize a ordenação dos fornecedores se necessário
      console.log(this.fornecedores);
    });
  }

  // Método para enviar o formulário e adicionar ou atualizar um fornecedor
  enviarFormulario() {
    if (this.formulario.valid) {
      const fornecedor = this.formulario.value;
      if (this.fornecedorParaEditar !== null && this.fornecedorParaEditar.id) {
        // Atualiza os dados do fornecedor existente
        this.fornecedoresService.atualizarFornecedor(this.fornecedorParaEditar.id, fornecedor).subscribe(() => {
          this.fornecedorParaEditar = null;
          this.formulario.reset();
          this.carregarFornecedores();

          const mensagem = 'Fornecedor editado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      } else {
        // Adiciona um novo fornecedor
        this.fornecedoresService.adicionarFornecedor(fornecedor).subscribe(() => {
          this.formulario.reset();
          this.carregarFornecedores();

          const mensagem = 'Fornecedor cadastrado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      }
    }
  }

  // Método para carregar os dados de um fornecedor para edição
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

  // Método para cancelar a edição de um fornecedor
  cancelarEdicao() {
    this.indiceFornecedorSelecionado = -1;
    this.fornecedorParaEditar = null;
    this.formulario.reset();
  }

  // Método para excluir um fornecedor
  excluirFornecedor(index: number) {
    const fornecedor = this.fornecedores[index];
    this.fornecedoresService.excluirFornecedor(fornecedor.id).subscribe(() => {
      this.carregarFornecedores();

      const mensagem = 'Fornecedor excluído com sucesso!';
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
