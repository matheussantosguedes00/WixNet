import { CadastroComponent } from './components/pages/almoxarifado/menu-principal/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './components/pages/painel-controle/painel-controle.component';

import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './components/pages/login/auth.guard';

import { AlmoxarifadoComponent } from './components/pages/almoxarifado/almoxarifado.component';
import { EntradaComponent } from './components/pages/almoxarifado/menu-principal/entrada/entrada.component';
import { SaidaComponent } from './components/pages/almoxarifado/menu-principal/saida/saida.component';
import { EstoqueComponent } from './components/pages/almoxarifado/menu-principal/estoque/estoque.component';
import { LinkProdutosComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-produtos/link-produtos.component';
import { LinkLojaComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-loja/link-loja.component';
import { LinkFornecedorComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-fornecedor/link-fornecedor.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {path: 'home',component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'painel-controle', component: PainelControleComponent }, // Rota para o Painel de Controle dentro de "home"

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
