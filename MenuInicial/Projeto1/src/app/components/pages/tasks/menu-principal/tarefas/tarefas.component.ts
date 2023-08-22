import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefasService } from './tarefas.service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  formulario: FormGroup;
  tarefas: any[] = [];
  tarefaParaEditar: any = null;
  indiceTarefaSelecionada: number = -1;
  mensagemSucesso: string = ''; // Inicializa a mensagem vazia
  mensagemErro: string = '';
  mostrarErro: boolean = false;

  

  constructor(private fb: FormBuilder, private tarefasService: TarefasService, private datePipe: DatePipe) {
    this.formulario = this.fb.group({
      tarefa: ['', Validators.required],
      responsavel: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataVencimento: ['', Validators.required],
      prioridade: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefasService.getTarefas().subscribe((tarefas) => {
      this.tarefas = tarefas;
      this.tarefas.sort((tarefaA, tarefaB) => {
        // Compare as tarefas pela propriedade que deseja usar para a ordenação.
        // Suponhamos que cada tarefa tenha uma propriedade "prioridade".
        return tarefaB.prioridade - tarefaA.prioridade; // Ordenar por prioridade em ordem decrescente
      });
      // Formate a data de início de cada tarefa para exibir apenas a data
      this.tarefas.forEach((tarefa) => {
        tarefa.dataInicio = this.datePipe.transform(tarefa.dataInicio, 'dd/MM/yyyy');
      });
      this.tarefas.forEach((tarefa) => {
        tarefa.dataVencimento = this.datePipe.transform(tarefa.dataVencimento, 'dd/MM/yyyy');
      });
      console.log(this.tarefas);
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const tarefa = this.formulario.value;
      if (this.tarefaParaEditar !== null && this.tarefaParaEditar.id) {
        this.tarefasService.atualizarTarefa(this.tarefaParaEditar.id, tarefa).subscribe(() => {
          this.tarefaParaEditar = null;
          this.formulario.reset();
          this.carregarTarefas();

          const mensagem = 'Tarefa editada com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      } else {
        this.tarefasService.adicionarTarefa(tarefa).subscribe(() => {
          this.formulario.reset();
          this.carregarTarefas();

          const mensagem = 'Tarefa cadastrada com sucesso!';
          this.mostrarMensagemDeErro(mensagem);
        });
      }
    }
  }

  editarTarefa(index: number) {
    this.indiceTarefaSelecionada = index;
    const tarefaSelecionada = this.tarefas[index];
    if (tarefaSelecionada && tarefaSelecionada.id) {
      this.tarefaParaEditar = { ...tarefaSelecionada };
      this.formulario.setValue({
        tarefa: this.tarefaParaEditar.tarefa,
        responsavel: this.tarefaParaEditar.responsavel,
        dataInicio: this.tarefaParaEditar.dataInicio, // Mantém a data de início original
        dataVencimento: this.tarefaParaEditar.dataVencimento, // Limpa o valor da data de vencimento
        prioridade: this.tarefaParaEditar.prioridade,
        status: this.tarefaParaEditar.status,
      });
      // Desabilita o campo de data de início
      const dataInicioControl = this.formulario.get('dataInicio');
      if (dataInicioControl !== null) { // Verifique se o controle não é nulo
        dataInicioControl.disable(); // Agora é seguro chamar o método disable()
      }
    }
  }

  cancelarEdicao() {
    this.indiceTarefaSelecionada = -1;
    this.tarefaParaEditar = null;
    this.formulario.reset();
  }

  excluirTarefa(index: number) {
    const tarefa = this.tarefas[index];
    this.tarefasService.excluirTarefa(tarefa.id).subscribe(() => {
      this.carregarTarefas();

      const mensagem ='Tarefa excluída com sucesso!';
      this.mostrarMensagemDeErro(mensagem);
    });
  }

  mostrarMensagemDeErro(mensagem: string) {
    this.mensagemErro = mensagem;
    this.mostrarErro = true;

    setTimeout(() => {
      this.mostrarErro = false;
      this.mensagemErro = '';
    }, 3000);
  }
}
