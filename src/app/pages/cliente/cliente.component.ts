import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep/cep.service';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { isNullOrUndefined } from 'util';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente = {} as ICliente;
  formCadastro: FormGroup;
  @ViewChild('alert') alertBI: any;

  constructor(private fb: FormBuilder,
    private cepService: CepService, private clienteService: ClienteService) { }

  ngOnInit() {

    this.formCadastro = this.fb.group({
      NOME: ['', Validators.required],
      CEP: ['', Validators.required],
      ENDERECO: [''],
      NUMERO: [''],
      BAIRRO: [''],
      CIDADE: [''],
      UF: [''],
      COMPLEMENTO: [''],
      CPF: [''],
      RG: [''],
      TELEFONE: ['']
    });
    this.atribuirValores();

  }


  prepararSalvarCliente() {

    this.cliente.celular = this.formCadastro.get("TELEFONE").value;
    this.cliente.complemento = this.formCadastro.get("COMPLEMENTO").value;
    this.cliente.cpf = this.formCadastro.get("CPF").value;
    this.cliente.endereco = this.formCadastro.get("ENDERECO").value;
    this.cliente.estado = this.formCadastro.get("CIDADE").value;
    this.cliente.nome = this.formCadastro.get("NOME").value;
    this.cliente.numero = this.formCadastro.get("NUMERO").value;
    this.cliente.rg = this.formCadastro.get("RG").value;
    this.cliente.uf = this.formCadastro.get("UF").value;
    this.cliente.cep = this.formCadastro.get("CEP").value;
    this.cliente.bairro = this.formCadastro.get("BAIRRO").value;
    if (isNullOrUndefined(this.cliente.cd_cliente) || isNaN(this.cliente.cd_cliente)) {
      this.clienteService.cadastrarCliente(this.cliente,sessionStorage.getItem('cd_usuario')).subscribe(data => {
        if (data > 0) {
          this.alertBI.toastConfirmacao('Cadastrado com sucesso!', EClasseAlertas.AlertSuccess);
          this.formCadastro.reset();
        } else {
          this.alertBI.toastConfirmacao('Erro ao cadastrar cliente!', EClasseAlertas.AlertDanger);
        }
      });
    } else {
      this.clienteService.alterarCliente(this.cliente).subscribe(data => {
        if (data > 0) {
          this.formCadastro.reset();
          this.alertBI.toastConfirmacao('Cliente atualizado com sucesso!', EClasseAlertas.AlertSuccess);
        }
      });
    }
  }

  consultarCep() {
    const cep = this.formCadastro.get('CEP').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => {
          const endereco: any = dados;
          if (endereco.bairro) {
            this.populaDadosForm(dados);
          } else {
            this.alertBI.toastConfirmacao('Cep não Encontrado!', EClasseAlertas.AlertDanger);
          }
        });
    }
  }

  populaDadosForm(dados) {
    // this.formulario.setValue({});

    this.formCadastro.patchValue({
      ENDERECO: dados.logradouro,
      complemento: dados.complemento,
      BAIRRO: dados.bairro,
      CIDADE: dados.localidade,
      UF: dados.uf
    });
  }

  atribuirValores() {
    this.cliente.cd_cliente = parseInt(sessionStorage.getItem("cd_cliente"), 10);
    if (this.cliente.cd_cliente > 0) {
      this.formCadastro.get("NOME").setValue(sessionStorage.getItem("nome"));
      this.formCadastro.get("CEP").setValue(sessionStorage.getItem("cep"));
      this.formCadastro.get("ENDERECO").setValue(sessionStorage.getItem("endereco"));
      this.formCadastro.get("NUMERO").setValue(sessionStorage.getItem("numero"));
      this.formCadastro.get("BAIRRO").setValue(sessionStorage.getItem("bairro"));
      this.formCadastro.get("CIDADE").setValue(sessionStorage.getItem("cidade"));
      this.formCadastro.get("UF").setValue(sessionStorage.getItem("uf"));
      this.formCadastro.get("COMPLEMENTO").setValue(sessionStorage.getItem("complemento"));
      this.formCadastro.get("CPF").setValue(sessionStorage.getItem("cpf"));
      this.formCadastro.get("RG").setValue(sessionStorage.getItem("rg"));
      this.formCadastro.get("TELEFONE").setValue(sessionStorage.getItem("telefone"));
    }
  }

}
