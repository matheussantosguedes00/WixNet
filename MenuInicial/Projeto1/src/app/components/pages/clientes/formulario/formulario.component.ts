import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '/formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private router: Router) {}
  sairPagina(): void {
    // Redireciona de volta para a página de tabela de clientes
    this.router.navigate(['/home/clientes/tabela']);
  }
  
}
