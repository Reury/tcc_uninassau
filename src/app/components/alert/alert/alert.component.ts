import { Component, OnInit } from '@angular/core';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  mensagem: string;
  idToast = '';

  constructor() {
    this.idToast = Math.floor((Math.random() * 10000) + 1).toString(16);
  }

  ngOnInit() {
    this.idRandom();
  }

  idRandom() {
    this.idToast = Math.floor((Math.random() * 10000) + 1).toString(16);
  }

  toastConfirmacao(text: string, classe: EClasseAlertas) {
    this.mensagem = text;
    const x = document.getElementById(this.idToast);
    x.innerText = text;
    x.className = '';
    x.className += ' ' + classe.toString();
    x.className += ' snackbar';
    x.className += ' show';
    x.className += ' alert';
    // Não funciona no IE
    /* x.classList.add('snackbar', 'show', 'alert', classe.toString()); */
    setTimeout(() => {
      x.classList.remove('show');
    }, 5500);

  }
}
