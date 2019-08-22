import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 

  constructor(private authService: UsuarioService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

