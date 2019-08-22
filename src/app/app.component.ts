import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BIPainel';

  mostrarMenu = false;

  constructor(private usuarioService: UsuarioService) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.usuarioService.mostrarMenuEmitter.subscribe(openMenu => {
      this.mostrarMenu = openMenu;
    });
  }
}
