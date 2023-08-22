import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TarefasService } from '../tarefas/tarefas.service.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tarefas: any[] = [];
  filtroResponsavel: string = '';
  filtroPrioridade: string = ''; // Adicione um filtro de prioridade
  tarefasFiltradas: any[] = []; // Armazena as tarefas após aplicar o filtro

  constructor(private tarefasService: TarefasService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefasService.getTarefas().subscribe((tarefas) => {
      this.tarefas = tarefas;
      this.filtrarTarefas(); // Aplicar o filtro inicialmente
      // Formate a data de início de cada tarefa para exibir apenas a data
      this.tarefas.forEach((tarefa) => {
        tarefa.dataInicio = this.datePipe.transform(tarefa.dataInicio, 'dd/MM/yyyy');
      });
      this.tarefas.forEach((tarefa) => {
        tarefa.dataVencimento = this.datePipe.transform(tarefa.dataVencimento, 'dd/MM/yyyy');
      });
    });
  }

  aplicarFiltro() {
    this.filtrarTarefas();
  }

  limparFiltro() {
    this.filtroResponsavel = '';
    this.filtroPrioridade = ''; // Limpe o filtro de prioridade
    this.filtrarTarefas(); // Recarregar todas as tarefas (sem filtro)
  }

  filtrarTarefas() {
    this.tarefasFiltradas = this.tarefas.filter((tarefa) => {
      // Verificar se a tarefa atende ao critério de filtro por Responsável e Prioridade
      return (
        (this.filtroResponsavel === '' || tarefa.responsavel.includes(this.filtroResponsavel)) &&
        (this.filtroPrioridade === '' || tarefa.prioridade === this.filtroPrioridade)
      );
    });
  }
}

