import { CadastroComponent } from './components/pages/almoxarifado/menu-principal/cadastro/cadastro.component';
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
import { AlmoxarifadoComponent } from './components/pages/almoxarifado/almoxarifado.component';
import { EntradaComponent } from './components/pages/almoxarifado/menu-principal/entrada/entrada.component';
import { SaidaComponent } from './components/pages/almoxarifado/menu-principal/saida/saida.component';
import { EstoqueComponent } from './components/pages/almoxarifado/menu-principal/estoque/estoque.component';
import { LinkProdutosComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-produtos/link-produtos.component';
import { LinkLojaComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-loja/link-loja.component';
import { LinkFornecedorComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-fornecedor/link-fornecedor.component';
import { TarefasComponent } from './components/pages/tasks/menu-principal/tarefas/tarefas.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {path: 'home',component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'painel-controle', component: PainelControleComponent }, // Rota para o Painel de Controle dentro de "home"

      { path: 'tasks', component: TasksComponent,canActivate: [AuthGuard],
      children: [
         { path: 'tarefas', component: TarefasComponent },
       
      ]}, 

      { path: 'clientes',component:ClientesComponent,  
      canActivate: [AuthGuard],
      children: [
         { path: 'perfil', component: LinkPerfilComponent },
         { path:'geral', component:LinkGeralComponent},
         {path:'caixa',component:LinkCaixaComponent},
         {path:'labs',component:LinkLabsComponent},
         {path:'contas',component:LinkContasComponent},
      ]},

      {path:'almoxarifado',component:AlmoxarifadoComponent ,
      canActivate: [AuthGuard],
      children: [
        {path: 'cadastro', component:CadastroComponent,
        canActivate: [AuthGuard],
        children: [
           {path:'produtos', component:LinkProdutosComponent},
           {path:'loja', component:LinkLojaComponent},
           {path:'fornecedor',component:LinkFornecedorComponent},
        ]
      },
        { path:'entrada', component:EntradaComponent},
        {path:'saida',component:SaidaComponent},
        {path:'estoque',component:EstoqueComponent},
      ]},
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule {}
