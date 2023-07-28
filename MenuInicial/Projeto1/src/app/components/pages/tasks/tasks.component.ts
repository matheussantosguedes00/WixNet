import { Component } from '@angular/core';

// Interface que define a estrutura de uma tarefa
interface Tarefa {
  descricao: string;
  nivel: string;
  status: string;
}

// Interface que define a estrutura das tarefas agrupadas por status
interface TarefasAgrupadasPorStatus {
  [status: string]: Tarefa[];
}

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  modoVisualizacao: string = 'lista'; // Variável que controla o modo de visualização atual

  // Função para alternar entre os modos de visualização
  alternarModoVisualizacao() {
    this.modoVisualizacao = this.modoVisualizacao === 'lista' ? 'cartao' : 'lista';
  }
  
  // Lista de tarefas
  tarefas: Tarefa[] = [
    // Lista de objetos Tarefa com suas descrições, níveis e status
    {
      descricao: 'Implementar login no sistema',
      nivel: 'Alto',
      status: 'Em progresso',
    },
    {
      descricao: 'Criar banco de dados',
      nivel: 'Médio',
      status: 'A fazer',
    },
    {
      descricao: 'Desenvolver componente de gráficos',
      nivel: 'Baixo',
      status: 'Concluído',
    },
    {
      descricao: 'Implementar login no sistema',
      nivel: 'Alto',
      status: 'Em progresso',
    },
    {
      descricao: 'Criar banco de dados',
      nivel: 'Médio',
      status: 'A fazer',
    },
    {
      descricao: 'Desenvolver componente de gráficos',
      nivel: 'Baixo',
      status: 'Concluído',
    },{
      descricao: 'Implementar login no sistema',
      nivel: 'Alto',
      status: 'Em progresso',
    },
    {
      descricao: 'Criar banco de dados',
      nivel: 'Médio',
      status: 'A fazer',
    },
    {
      descricao: 'Desenvolver componente de gráficos',
      nivel: 'Baixo',
      status: 'Concluído',
    },
    {
      descricao: 'Implementar login no sistema',
      nivel: 'Alto',
      status: 'Em progresso',
    },
    {
      descricao: 'Criar banco de dados',
      nivel: 'Médio',
      status: 'A fazer',
    },
    {
      descricao: 'Desenvolver componente de gráficos',
      nivel: 'Baixo',
      status: 'Concluído',
    },{
      descricao: 'Implementar login no sistema',
      nivel: 'Alto',
      status: 'Em progresso',
    },
    {
      descricao: 'Criar banco de dados',
      nivel: 'Médio',
      status: 'A fazer',
    },
    {
      descricao: 'Desenvolver componente de gráficos',
      nivel: 'Baixo',
      status: 'Concluído',
    },
    {
      descricao: 'Implementar login no sistema',
      nivel: 'Alto',
      status: 'Em progresso',
    },
    {
      descricao: 'Criar banco de dados',
      nivel: 'Médio',
      status: 'A fazer',
    },
    {
      descricao: 'Desenvolver componente de gráficos',
      nivel: 'Baixo',
      status: 'Concluído',
    },
    // Adicione mais tarefas aqui...
  ];
  

  // Função para agrupar as tarefas por status
  getTarefasAgrupadasPorStatus(): TarefasAgrupadasPorStatus {
    // Usando a função 'reduce' para agrupar as tarefas por status
    return this.tarefas.reduce((groupedTarefas: TarefasAgrupadasPorStatus, tarefa: Tarefa) => {
      if (!groupedTarefas[tarefa.status]) {
        // Se o status da tarefa ainda não existe no grupo, cria um novo array vazio
        groupedTarefas[tarefa.status] = [];
      }
      // Adiciona a tarefa ao array correspondente ao seu status
      groupedTarefas[tarefa.status].push(tarefa);
      return groupedTarefas;
    }, {});
  }
}
