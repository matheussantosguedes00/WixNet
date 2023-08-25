import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: '/formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
 
  sairPagina(): void {
    // Adicione aqui a lógica para fechar a página em branco,
    // por exemplo, redirecionando para outra rota ou fechando um modal.
    window.history.back();

 
  }
  
}
