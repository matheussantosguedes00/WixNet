import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from './produto.service.service';

@Component({
  selector: 'produtos',
  templateUrl: './link-produtos.component.html',
  styleUrls: ['../style.css']
})
export class LinkProdutosComponent implements OnInit {
  formulario: FormGroup;
  produtos: any[] = [];
  produtoParaEditar: any = null;
  indiceProdutoSelecionado: number = -1;
  mensagemSucesso: string = ''; // Inicializa a mensagem vazia
  mensagemErro: string = '';
mostrarErro: boolean = false;

  constructor(private fb: FormBuilder, private produtosService: ProdutosService) {
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
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtosService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      this.produtos.sort((produtoA, produtoB) => {
        // Compare os produtos pela propriedade que deseja usar para a ordenação.
        // Suponhamos que cada produto tenha uma propriedade "preco".
        return produtoB.id - produtoA.id; // Ordenar por preço em ordem decrescente
      });
      console.log(this.produtos);
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const produto = this.formulario.value;
      if (this.produtoParaEditar !== null && this.produtoParaEditar.id) {
          this.produtosService.atualizarProduto(this.produtoParaEditar.id, produto).subscribe(() => {
          this.produtoParaEditar = null;
          this.formulario.reset();
          this.carregarProdutos();
          
          const mensagem = 'Produto editado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
          
        });
      } else {
        this.produtosService.adicionarProduto(produto).subscribe(() => {
          this.formulario.reset();
          this.carregarProdutos();

          const mensagem = 'Produto cadastrado com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
       
         
        });
      }
    }
  }

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

  cancelarEdicao() {
    this.indiceProdutoSelecionado = -1;
    this.produtoParaEditar = null;
    this.formulario.reset();
  }
  

  excluirProduto(index: number) {
    const produto = this.produtos[index];
    this.produtosService.excluirProduto(produto.id).subscribe(() => {
      this.carregarProdutos();

      const mensagem ='Produto excluído com sucesso!';
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
