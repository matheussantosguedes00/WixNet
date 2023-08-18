import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private baseUrl = 'http://localhost:3000/api/produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  adicionarProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, produto);
  }

  atualizarProduto(id: number, produto: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, produto);
  }

  excluirProduto(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}