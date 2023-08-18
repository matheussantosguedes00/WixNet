import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseUrl = 'http://localhost:3000/api/fornecedores';

  constructor(private http: HttpClient) {}

  getFornecedores(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  adicionarFornecedor(loja: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, loja);
  }

  atualizarFornecedor(id: number, loja: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, loja);
  }

  excluirFornecedor(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}