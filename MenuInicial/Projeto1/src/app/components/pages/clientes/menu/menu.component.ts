import { Component, OnInit } from '@angular/core';
import { ClienteIdService } from '../services/cliente-id.service';

@Component({
  selector: 'menu-info',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titleApelido: string = '';

  constructor(private clienteIdService: ClienteIdService) {}

  ngOnInit() {
    const idSelecionado = this.clienteIdService.idSelecionado;

    if (idSelecionado) {
      this.clienteIdService.getClientePorId(idSelecionado).subscribe(
        (cliente) => {
          // Apenas atribua o apelido à variável titleApelido
          this.titleApelido = cliente.apelido;
        },
        (error) => {
          console.error('Erro ao obter informações do cliente:', error);
        }
      );
    }
  }
}
