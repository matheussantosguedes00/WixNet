import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClienteIdService {
  private baseUrl = 'http://localhost:3000/api/clientes';
  idSelecionado: number | null = null;

  constructor(private http: HttpClient) {}

  setIdSelecionado(id: number) {
    this.idSelecionado = id;
  }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getClientePorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Erro ao obter informações do cliente:', error);
        return throwError('Erro ao buscar cliente');
      })
    );
  }

  adicionarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, cliente);
  }

  atualizarCliente(cliente: any): Observable<any> {
    const url = `${this.baseUrl}/${this.idSelecionado}`;
    return this.http.put<any>(url, cliente).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar cliente:', error);
        return throwError('Erro ao atualizar cliente');
      })
    );
  }

  excluirCliente(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
