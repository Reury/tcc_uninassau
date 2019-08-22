import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal'; */
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { AuthGuard } from './guards/auth-guard';
import { AlertComponent } from './components/alert/alert/alert.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { PipesModule } from './pipe/pipe.module';
import { ProcessoComponent } from './pages/processo/processo.component';
import { CampoControlErroComponent } from './campo-control-error/campo-control-erro/campo-control-erro.component';
import { ProcessosComponent } from './pages/lst-processos/processos/processos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    ClienteComponent,
    ClientesComponent,
    ProcessoComponent,
    CampoControlErroComponent,
    ProcessosComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      PipesModule
  /*   BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot() */
  ],
  providers: [UsuarioService, AuthGuard],
   bootstrap: [
      AppComponent
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
