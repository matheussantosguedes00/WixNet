import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private baseUrl = 'http://localhost:3000/api/produtos';

  constructor(private http: HttpClient) {}

  // Método para obter a lista de produtos da API
  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Método para adicionar um novo produto
  adicionarProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, produto);
  }

  // Método para atualizar os dados de um produto existente
  atualizarProduto(id: number, produto: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, produto);
  }

  // Método para excluir um produto pelo ID
  excluirProduto(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
