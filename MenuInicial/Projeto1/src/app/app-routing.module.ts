import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './components/pages/painel-controle/painel-controle.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-painel-controle', pathMatch: 'full' }, // Rota padrão redireciona para a página de Painel
  { path: 'app-painel-controle', component: PainelControleComponent },
  { path:'app-tasks',component:TasksComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
