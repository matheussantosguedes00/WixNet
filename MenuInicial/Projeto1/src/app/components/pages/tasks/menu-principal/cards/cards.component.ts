import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TarefasService } from '../tarefas/tarefas.service.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  tarefas: any[] = [];
  filtroResponsavel: string = '';
  filtroPrioridade: string = '';
  tarefasFiltradas: any[] = [];

  constructor(private tarefasService: TarefasService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefasService.getTarefas().subscribe((tarefas) => {
      this.tarefas = tarefas;
      this.filtrarTarefas();

      this.tarefas.forEach((tarefa) => {
        tarefa.dataInicio = this.datePipe.transform(tarefa.dataInicio, 'dd/MM/yyyy');
        tarefa.dataVencimento = this.datePipe.transform(tarefa.dataVencimento, 'dd/MM/yyyy');

        // Calcula o progresso com base na diferença entre a data atual e a data de vencimento
        tarefa.progresso = this.calcularProgressoComDatas(tarefa);
        console.log()
      });
    });
  }

  calcularProgressoComDatas(tarefa: any): number {
    const dataAtual = new Date().getTime();
    const dataVencimento = new Date(tarefa.dataVencimento).getTime();

    // Calcula a diferença em milissegundos entre a data atual e a data de vencimento
    const diferencaMilissegundos = dataVencimento - dataAtual;

    // Calcula a diferença em milissegundos entre a data de vencimento e a data de início
    const diferencaTotalMilissegundos = new Date(tarefa.dataVencimento).getTime() - new Date(tarefa.dataInicio).getTime();

    // Calcula o progresso com base na diferença entre a data atual e a data de vencimento
    const progresso = ((diferencaTotalMilissegundos - diferencaMilissegundos) / diferencaTotalMilissegundos) * 100;
    
    // Garante que o progresso não seja maior que 100% ou menor que 0%
    return Math.min(1000, Math.max(0, progresso));
  }

  aplicarFiltro() {
    this.filtrarTarefas();
  }

  limparFiltro() {
    this.filtroResponsavel = '';
    this.filtroPrioridade = '';
    this.filtrarTarefas();
  }

  filtrarTarefas() {
    this.tarefasFiltradas = this.tarefas.filter((tarefa) => {
      return (
        (this.filtroResponsavel === '' || tarefa.responsavel.includes(this.filtroResponsavel)) &&
        (this.filtroPrioridade === '' || tarefa.prioridade === this.filtroPrioridade)
      );
    });
  }

  // Função para obter uma lista exclusiva de status
  getStatusList() {
    return [...new Set(this.tarefasFiltradas.map((tarefa) => tarefa.status))];
  }

  // Função para filtrar tarefas por status
  tarefasFiltradasPorStatus(status: string) {
    return this.tarefasFiltradas.filter((tarefa) => tarefa.status === status);
  }
}
