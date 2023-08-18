import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from './produto.service.service'; // Importe o serviço de produtos correspondente

@Component({
  selector: 'produtos',
  templateUrl: './link-produtos.component.html',
  styleUrls: ['../style.css']
})
export class LinkProdutosComponent implements OnInit {
  formulario: FormGroup; // O formulário reativo para entrada de dados
  produtos: any[] = []; // Array para armazenar os produtos
  produtoParaEditar: any = null; // Informações do produto que está sendo editado
  indiceProdutoSelecionado: number = -1; // Índice do produto selecionado para edição
  mensagemSucesso: string = ''; // Inicializa a mensagem de sucesso vazia
  mensagemErro: string = ''; // Mensagem de erro exibida temporariamente
  mostrarErro: boolean = false; // Flag para controlar a exibição da mensagem de erro

  constructor(private fb: FormBuilder, private produtosService: ProdutosService) {
    // Criação do formulário reativo com campos e validações
    this.formulario = this.fb.group({
      item: ['', Validators.required],
      km: ['', Validators.required],
      estoqueMinimo: ['', Validators.required],
      codigoProduto: ['', Validators.required],
      modelo: ['', Validators.required],
      custoUnitario: ['', Validators.required],
      unidadeMedida: ['', Validators.required],
      serialNumero: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarProdutos(); // Carrega os produtos ao inicializar o componente
  }

  // Método para carregar os produtos da API e atualizar o array
  carregarProdutos() {
    this.produtosService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      // Ordenar os produtos pelo ID em ordem decrescente
      this.produtos.sort((produtoA, produtoB) => produtoB.id - produtoA.id);
      console.log(this.produtos);
    });
  }

  // Método para enviar o formulário e adicionar ou atualizar um produto
  enviarFormulario() {
    if (this.formulario.valid) {
      const produto = this.formulario.value;
      if (this.produtoParaEditar !== null && this.produtoParaEditar.id) {
        // Atualiza os dados do produto existente
        this.produtosService.atualizarProduto(this.produtoParaEditar.id, produto).subscribe(() => {
          this.produtoParaEditar = null;
          this.formulario.reset();
          this.carregarProdutos();
          
          const mensagem = 'Produto editado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      } else {
        // Adiciona um novo produto
        this.produtosService.adicionarProduto(produto).subscribe(() => {
          this.formulario.reset();
          this.carregarProdutos();

          const mensagem = 'Produto cadastrado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      }
    }
  }

  // Método para carregar os dados de um produto para edição
  editarProduto(index: number) {
    this.indiceProdutoSelecionado = index;
    const produtoSelecionado = this.produtos[index];
    if (produtoSelecionado && produtoSelecionado.id) {
      this.produtoParaEditar = { ...produtoSelecionado };
      this.formulario.setValue({
        item: this.produtoParaEditar.Item,
        km: this.produtoParaEditar.KM,
        estoqueMinimo: this.produtoParaEditar.EstoqueMinimo,
        codigoProduto: this.produtoParaEditar.CodigoProduto,
        modelo: this.produtoParaEditar.Modelo,
        custoUnitario: this.produtoParaEditar.CustoUnitario,
        unidadeMedida: this.produtoParaEditar.UnidadeMedida,
        serialNumero: this.produtoParaEditar.SerialNumero,
      });
    }
  }

  // Método para cancelar a edição de um produto
  cancelarEdicao() {
    this.indiceProdutoSelecionado = -1;
    this.produtoParaEditar = null;
    this.formulario.reset();
  }

  // Método para excluir um produto
  excluirProduto(index: number) {
    const produto = this.produtos[index];
    this.produtosService.excluirProduto(produto.id).subscribe(() => {
      this.carregarProdutos();

      const mensagem = 'Produto excluído com sucesso!';
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
