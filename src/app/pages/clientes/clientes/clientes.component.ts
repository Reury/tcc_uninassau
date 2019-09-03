import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { isNullOrUndefined } from 'util';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { LayoutService } from 'src/app/helpers/layout.service';
import { ESearch } from 'src/app/enuns/e-serach.enum';
import { Router } from '@angular/router';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: ICliente[];
  pesquisar: string;
  searchClientes = ESearch.ECliente;
  searchClientesValue: any;
  cliente: ICliente;
  openModal = false;

  @ViewChild('alert') alertBI: any;
  constructor(private clienteService: ClienteService, private rota: Router) { }

  ngOnInit() {
    this.getListaClientes();
    sessionStorage.removeItem("nome");
    sessionStorage.removeItem("cep");
    sessionStorage.removeItem("endereco");
    sessionStorage.removeItem("numero");
    sessionStorage.removeItem("bairro");
    sessionStorage.removeItem("cidade");
    sessionStorage.removeItem("uf");
    sessionStorage.removeItem("complemento");
    sessionStorage.removeItem("cpf");
    sessionStorage.removeItem("rg");
    sessionStorage.removeItem("telefone");
    sessionStorage.removeItem("cd_cliente")
  }

  getListaClientes() {
    if (isNullOrUndefined(this.listaClientes)) {
      this.listaClientes = [];
    }
    this.clienteService.listaClientes(sessionStorage.getItem('cd_usuario')).subscribe(data => {
      if (data) {
        this.listaClientes = data;
      }
    });
  }

  getSizePorcentagem(porcentagem: number): any {
    return LayoutService.getHeightScreenAreaWithPercentage(porcentagem);
  }

  adicionarProcesso() {
    this.rota.navigate(['processo']);
  }

  excluirCliente() {
    this.clienteService.deletarCliente(this.cliente.cd_cliente).subscribe(data => {
      if (data > 0) {
        this.listaClientes.splice(this.listaClientes.indexOf(this.cliente), 1);
        this.alertBI.toastConfirmacao('Cliente excluido com sucesso!', EClasseAlertas.AlertSuccess);
      }
    });
  }

  deletarCliente(cliente) {
    this.cliente = cliente;
  }

  editarCliente(cliente) {
    sessionStorage.setItem('nome', cliente.nome);
    sessionStorage.setItem('cd_cliente', cliente.cd_cliente);
    sessionStorage.setItem('cpf', cliente.cpf);
    sessionStorage.setItem('rg', cliente.rg);
    sessionStorage.setItem('cep', cliente.cep);
    sessionStorage.setItem('endereco', cliente.endereco);
    sessionStorage.setItem('telefone', cliente.celular);
    sessionStorage.setItem('numero', cliente.numero);
    sessionStorage.setItem('bairro', cliente.bairro);
    sessionStorage.setItem('cidade', cliente.estado);
    sessionStorage.setItem('uf', cliente.uf);
    sessionStorage.setItem('complemento', cliente.complemento);
    sessionStorage.setItem('estado', cliente.estado);
  }
}
