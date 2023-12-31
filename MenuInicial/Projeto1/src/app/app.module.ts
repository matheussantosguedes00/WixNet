import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PainelControleComponent } from './components/pages/painel-controle/painel-controle.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';


import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { CommonModule, DatePipe } from '@angular/common';

import { MatSelectModule } from '@angular/material/select'; // Importe o MatSelectModule aqui

import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ClientesComponent } from './components/pages/clientes/clientes.component';

import { RouterModule } from '@angular/router';
import { AlmoxarifadoComponent } from './components/pages/almoxarifado/almoxarifado.component';

import { CadastroComponent } from './components/pages/almoxarifado/menu-principal/cadastro/cadastro.component';
import { EntradaComponent } from './components/pages/almoxarifado/menu-principal/entrada/entrada.component';
import { SaidaComponent } from './components/pages/almoxarifado/menu-principal/saida/saida.component';
import { EstoqueComponent } from './components/pages/almoxarifado/menu-principal/estoque/estoque.component';


import { LinkFornecedorComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-fornecedor/link-fornecedor.component';
import { LinkLojaComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-loja/link-loja.component';
import { LinkProdutosComponent } from './components/pages/almoxarifado/menu-principal/cadastro/links/link-produtos/link-produtos.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TarefasComponent } from './components/pages/tasks/menu-principal/tarefas/tarefas.component';
import { ListaComponent } from './components/pages/tasks/menu-principal/lista/lista.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CardsComponent } from './components/pages/tasks/menu-principal/cards/cards.component';

import { FiltroPrioridadePipe } from './components/pages/tasks/menu-principal/cards/filtro-prioridade.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormularioComponent } from './components/pages/clientes/formulario/formulario.component';
import { TabelaComponent } from './components/pages/clientes/tabela/tabela.component';
import { InfoEditerComponent } from './components/pages/clientes/menu/Menu-Prinipal/info-editer/info-editer.component';
import { MenuComponent } from './components/pages/clientes/menu/menu.component';
import { CircutosComponent } from './components/pages/clientes/menu/Menu-Prinipal/circutos/circutos.component';
import { ContratosComponent } from './components/pages/clientes/menu/Menu-Prinipal/contratos/contratos.component';
import { TicketsComponent } from './components/pages/clientes/menu/Menu-Prinipal/tickets/tickets.component';




export class SeuModulo { }



@NgModule({
  declarations: [
    AppComponent,
    PainelControleComponent,
    NavComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    
    AlmoxarifadoComponent,
    LinkProdutosComponent,
    EntradaComponent,
    SaidaComponent,
    EstoqueComponent,
    LinkFornecedorComponent,
    LinkLojaComponent,
    CadastroComponent,
  
    TasksComponent,
    
    TarefasComponent,
    ListaComponent,
    CardsComponent,
    FiltroPrioridadePipe,
    FormularioComponent,
    TabelaComponent,
    InfoEditerComponent,
    MenuComponent,
    CircutosComponent,
    ContratosComponent,
    TicketsComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatListModule,
    MatButtonToggleModule,
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],

})

export class AppModule {}
