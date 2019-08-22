import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dataHora: string;
  open = true;
  usuarioLogado: string;
  cdConta: string;
  /* contaUsuario = {} as IConta; */
  loading = false;

  constructor(private rota: Router) { }

  ngOnInit() {
    /*   this.openNav(); 
      this.getDataTime(); 
     this.getSchema();  */

    this.usuarioLogado = sessionStorage.getItem('usuario');
  }

  openNav() {
    if (this.open === true) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('test').style.marginLeft = '250px';
      document.getElementById('test').style.transition = '0.5s';
      /*  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';  */
      this.open = !this.open;
    } else {
      this.closeNav();
    }
  }

  deslogar() {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.setItem('cd_conta', null);
    sessionStorage.setItem('usuario', null);
    sessionStorage.clear();
    this.rota.navigate(['login']);
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('test').style.marginLeft = '0px';
    document.body.style.backgroundColor = 'white';
    this.open = !this.open;
  }

  /* getDataTime() {
    this.menuService.obterDataHora().subscribe((data: any) => {
      this.dataHora = moment(data).format('DD/MM/YYYY HH:mm');
    });
  } */

  /*  getSchema() {
     this.loading = true;
     this.cdConta = sessionStorage.getItem('cd_conta');
     this.contaService.GetSchemaUsuario(this.cdConta).subscribe(data => {
       if (data) {
         this.contaUsuario = data;
         sessionStorage.setItem('schema', this.contaUsuario.NM_SCHEMA);
         this.loading = false;
       } else {
         alert('Erro ao tentar carregar o schema do usuário');
       }
     }, error => {
       this.loading = false;
       alert('Erro ao tentar carregar o schema do usuário');
     });
   } */

}
