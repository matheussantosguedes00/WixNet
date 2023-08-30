import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteIdService {
  private baseUrl = 'http://localhost:3000/api/clientes'; // URL da API de clientes

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getClientePorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  adicionarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, cliente);
  }

  atualizarCliente(id: number, cliente: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, cliente);
  }

  excluirCliente(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  
  private clienteId: number | null = null;

  setClienteId(id: number) {
    this.clienteId = id;
  }

  getClienteId(): number | null {
    return this.clienteId;
  }
}