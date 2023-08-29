import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteIdService {
  private clienteId: number | null = null;

  setClienteId(id: number) {
    this.clienteId = id;
  }

  getClienteId(): number | null {
    return this.clienteId;
  }
}