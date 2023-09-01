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
    // Verifica se os campos obrigatórios estão preenchidos
    if (!cliente.apelido || !cliente.razaoSocial || !cliente.cnpj || !cliente.cidade || !cliente.cep || !cliente.estado || !cliente.endereco) {
      return throwError('Todos os campos obrigatórios devem ser preenchidos.');
    }

    return this.http.post<any>(this.baseUrl, cliente).pipe(
      catchError((error) => {
        console.error('Erro ao adicionar cliente:', error);
        return throwError('Erro ao adicionar cliente. Por favor, verifique os dados e tente novamente.');
      })
    );
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
