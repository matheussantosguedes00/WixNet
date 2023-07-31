import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './components/pages/painel-controle/painel-controle.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './components/pages/login/auth.guard';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { LinkPerfilComponent } from './components/pages/clientes/links/link-perfil/link-perfil.component';
import { LinkGeralComponent } from './components/pages/clientes/links/link-geral/link-geral.component';
import { LinkCaixaComponent } from './components/pages/clientes/links/link-caixa/link-caixa.component';
import { LinkLabsComponent } from './components/pages/clientes/links/link-labs/link-labs.component';
import { LinkContasComponent } from './components/pages/clientes/links/link-contas/link-contas.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'painel-controle', component: PainelControleComponent }, // Rota para o Painel de Controle dentro de "home"
      { path: 'tasks', component: TasksComponent }, // Rota para a página Tasks dentro de "home"
      { path: 'clientes',component:ClientesComponent,  
      canActivate: [AuthGuard],
      children: [
         { path: 'perfil', component: LinkPerfilComponent },
         { path:'geral', component:LinkGeralComponent},
         {path:'caixa',component:LinkCaixaComponent},
         {path:'labs',component:LinkLabsComponent},
         {path:'contas',component:LinkContasComponent},
      ]},
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule {}
