import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPrioridade'
})
export class FiltroPrioridadePipe implements PipeTransform {
  transform(tarefas: any[], prioridade: string): any[] {
    if (!tarefas || !prioridade) {
      return tarefas;
    }

    return tarefas.filter(tarefa => tarefa.prioridade === prioridade);
  }
}
