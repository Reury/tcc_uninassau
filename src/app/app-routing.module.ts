import { ProcessoComponent } from './pages/processo/processo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { ProcessosComponent } from './pages/lst-processos/processos/processos.component';

const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'cadastro', component: ClienteComponent, canActivate: [AuthGuard] },
      {
        path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]
      },
      { path: 'processo/:id', component: ProcessoComponent, canActivate: [AuthGuard] },

      { path: 'processos', component: ProcessosComponent, canActivate: [AuthGuard] }
    ]
  }


];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
