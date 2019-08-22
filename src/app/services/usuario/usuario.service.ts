import { Injectable, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IConta } from 'src/app/Interfaces/IConta';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarLoadingLogin = new EventEmitter<boolean>();
  usuario;
  htt: any;
  constructor(private httpClient: HttpClient, private rota: Router) { }

  public cadastrarUsuario(usuario: IConta): Observable<number> {
   return  this.httpClient.post<number>(`http://localhost:60409/api/usuario/CadastrarUsuario`, usuario);

  }

  public autenticarUsuario(usuario = {} as IConta) {

    const returnData = forkJoin(this.httpClient.post<IConta>('http://localhost:60409/api/usuario/AutenticarUsuario', usuario));
    returnData.subscribe(value => {
      this.usuario = value[0];
      if (value[0] !== null) {
        this.mostrarMenuEmitter.emit(true);
        this.mostrarLoadingLogin.emit(true);
        sessionStorage.setItem('auth', 'true');
        sessionStorage.setItem('cd_usuario', this.usuario.cd_usuario);
        sessionStorage.setItem('usuario', this.usuario.email);
        this.rota.navigate(['']);
      } else {
        this.mostrarMenuEmitter.emit(false);
        this.rota.navigate(['login']);
        alert('Usuário ou Senha incorreto');
      }
    });

  }

  usuarioEstaAutenticado() {
    if (sessionStorage.getItem('auth')) {
      return true;
    }
    return false;
  }

}
