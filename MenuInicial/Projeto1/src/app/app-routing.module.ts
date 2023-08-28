import { CadastroComponent } from './components/pages/almoxarifado/menu-principal/cadastro/cadastro.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './components/pages/painel-controle/painel-controle.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './components/pages/login/auth.guard';
import { ClientesComponent } from './components/pages/clientes/clientes.component';

import { AlmoxarifadoComponent } from './components/pages/almoxarifado/almoxarifado.component';
import { EntradaComponent } from './components/pages/almoxarifado/menu-principal/entrada/entrada.component';
import { SaidaComponent } from './components/pages/almoxarifado/menu-principal/saida/saida.component';
import { EstoqueComponent } from './components/pages/almoxarifado/menu-principal/estoque/estoque.component';
import { LinkProdutosComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-produtos/link-produtos.component';
import { LinkLojaComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-loja/link-loja.component';
import { LinkFornecedorComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-fornecedor/link-fornecedor.component';
import { TarefasComponent } from './components/pages/tasks/menu-principal/tarefas/tarefas.component';
import { ListaComponent } from './components/pages/tasks/menu-principal/lista/lista.component';
import { CardsComponent } from './components/pages/tasks/menu-principal/cards/cards.component';
import { FormularioComponent } from './components/pages/clientes/formulario/formulario.component';
import { TabelaComponent } from './components/pages/clientes/tabela/tabela.component';
import { InfoEditerComponent } from './components/pages/clientes/menu/Menu-Prinipal/info-editer/info-editer.component';
import { MenuComponent } from './components/pages/clientes/menu/menu.component';
import { CircutosComponent } from './components/pages/clientes/menu/Menu-Prinipal/circutos/circutos.component';
import { ContratosComponent } from './components/pages/clientes/menu/Menu-Prinipal/contratos/contratos.component';
import { TicketsComponent } from './components/pages/clientes/menu/Menu-Prinipal/tickets/tickets.component';



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
         { path: 'lista', component: ListaComponent },
         {path: 'cards', component:CardsComponent}
       
      ]}, 

      { path: 'clientes',component:ClientesComponent,  
      canActivate: [AuthGuard],
      children: [
        {path: 'tabela',component:TabelaComponent},
        {path:'formulario', component:FormularioComponent},
        {path:'menu-info',component:MenuComponent,canActivate: [AuthGuard],
        children: [
          {path:'information',component:InfoEditerComponent},
          {path:'circutos',component:CircutosComponent},
          {path:'contratos',component:ContratosComponent},
          {path:'tickets',component:TicketsComponent},
          
        ]}
        
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
