import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './components/template/painel-controle/painel-controle.component';
import { Home2Component } from './components/template/home2/home2.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-home2', pathMatch: 'full' }, // Rota padrão redireciona para a página de Home2
  {path:'app-home2',component:Home2Component},
  { path: 'app-painel-controle', component: PainelControleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
