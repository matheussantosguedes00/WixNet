import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LojaService {
  private baseUrl = 'http://localhost:3000/api/lojas';

  constructor(private http: HttpClient) {}

  getLojas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  adicionarLoja(loja: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, loja);
  }

  atualizarLoja(id: number, loja: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, loja);
  }

  excluirLoja(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

