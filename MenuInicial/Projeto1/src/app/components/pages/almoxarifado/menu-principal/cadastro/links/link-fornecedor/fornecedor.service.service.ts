import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseUrl = 'http://localhost:3000/api/fornecedores';

  constructor(private http: HttpClient) {}

  // Método para obter a lista de fornecedores da API
  getFornecedores(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Método para adicionar um novo fornecedor
  adicionarFornecedor(fornecedor: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, fornecedor);
  }

  // Método para atualizar os dados de um fornecedor existente
  atualizarFornecedor(id: number, fornecedor: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, fornecedor);
  }

  // Método para excluir um fornecedor pelo ID
  excluirFornecedor(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
