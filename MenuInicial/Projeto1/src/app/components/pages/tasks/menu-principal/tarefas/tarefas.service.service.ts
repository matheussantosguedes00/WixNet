import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private baseUrl = 'http://localhost:3000/api/tarefas';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  adicionarTarefa(tarefa: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, tarefa);
  }

  atualizarTarefa(id: number, tarefa: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, tarefa);
  }

  excluirTarefa(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
