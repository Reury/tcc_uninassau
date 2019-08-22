import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { IConta } from 'src/app/Interfaces/IConta';
import { isNullOrUndefined } from 'util';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rota: Router, private fb: FormBuilder, private usuarioService: UsuarioService) { }
  formAutenticador: FormGroup;
  formCadastrarUsuario: FormGroup;
  usuario: IConta;
  email: string;
  senha: string;
  loading = false;

  @ViewChild('alert') alert: any;

  ngOnInit() {
    this.formAutenticador = this.fb.group({
      EMAIL: ['', Validators.required],
      SENHA: ['', Validators.required]
    });

    this.formCadastrarUsuario = this.fb.group({
      EMAIL_CADASTRO: ['', Validators.required],
      SENHA_CADASTRO: ['', Validators.required]
    });
  }

  autenticarUsuario() {

    if (isNullOrUndefined(this.usuario)) {
      this.usuario = {} as IConta;
    }
    this.usuario.email = this.formAutenticador.get("EMAIL").value;
    this.usuario.senha = this.formAutenticador.get("SENHA").value;
    this.usuarioService.autenticarUsuario(this.usuario);

  }

  criarConta() {
    if (isNullOrUndefined(this.usuario)) {
      this.usuario = {} as IConta;
    }
    this.usuario.codigo = 0;
    this.usuario.email = this.formCadastrarUsuario.get("EMAIL_CADASTRO").value;
    this.usuario.senha = this.formCadastrarUsuario.get("SENHA_CADASTRO").value;
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(data => {
      if (data > 0) {
        this.alert.toastConfirmacao('Cadastrado com sucesso!', EClasseAlertas.AlertSuccess);
        this.formCadastrarUsuario.reset();
      }
    });

  }

}
