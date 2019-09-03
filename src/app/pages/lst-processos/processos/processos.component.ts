import { Component, OnInit } from '@angular/core';
import { ProcessoService } from 'src/app/services/processo/processo.service';
import { IProcesso } from 'src/app/Interfaces/IProcesso';
import { LayoutService } from 'src/app/helpers/layout.service';
import { ESearch } from 'src/app/enuns/e-serach.enum';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {
  searchClientes = ESearch.EProcesso;
  searchClientesValue: any;
  constructor(private processoService: ProcessoService) { }
  listaProcesso: IProcesso[];
  valor: any;
  table = '';
  newWin: any;
  valorTotal = 0;
  ValorTotalPago = 0;
  qtdProcessosPendentes = 0;
  valortotalaPagar = 0;
  ngOnInit() {
    this.getTodosProcessos();
  }



  exibirRelatorio() {
    this.table += "<table class='table table-bordered'style='width:100%;border: 1px solid black;border-collapse: collapse;'><tr><th style='border: 1px solid black;border-collapse: collapse;'>Processo</th><th style=' border: 1px solid black;border-collapse: collapse;'>Polo Ativo</th> <th style=' border: 1px solid black;border-collapse: collapse;'>Valor</th></tr>";

    this.listaProcesso.forEach(x => {
      this.valorTotal += x.valor;
      if (x.status === 'Pago') {
        this.ValorTotalPago += x.valor;
      } else {
        this.valortotalaPagar += x.valor;
        this.qtdProcessosPendentes = this.qtdProcessosPendentes + 1;
      }

      // tslint:disable-next-line: max-line-length
      this.table += "<tr style='border: 1px solid black;border-collapse: collapse;'><td style='border: 1px solid black;border-collapse: collapse;'>" + x.processo + "</td><td style='border: 1px solid black;border-collapse: collapse;'>" + x.polo_ativo + "</td><td style='border: 1px solid black;border-collapse: collapse;'>" + x.valor + "</td></tr>";
    });

    this.table += "</table>";
    this.table += "<div class='row'> <div class='col-md-12'><p style='color: #6d6c6cce;font-family: monospace;font-size: 16px;'>Valor total dos processos: R$" + this.valorTotal + "</p> </div></div>"
    this.table += "<div class='row'> <div class='col-md-12'><p style='color: #6d6c6cce;font-family: monospace;font-size: 16px;'>Valor total a ser recebido: R$" + this.valortotalaPagar + "</p> </div></div>"
    this.table += "<div class='row'> <div class='col-md-12'><p style='color: #6d6c6cce;font-family: monospace;font-size: 16px;'>Valor total recebido: R$" + this.ValorTotalPago + "</p> </div></div>"
    this.table += "<div class='row'> <div class='col-md-12'><p style='color: #6d6c6cce;font-family: monospace;font-size: 16px;'>Processos pendêntes:" + this.qtdProcessosPendentes + "</p> </div></div>" 
    this.table += "<div class='row'> <div class='col-md-12'><p style='color: #6d6c6cce;font-family: monospace;font-size: 16px;'>Processos totais:" + this.listaProcesso.length + "</p> </div></div>"

    const divToPrint = this.table;
    const tela_impressao = window.open('about:blank');
    tela_impressao.document.write(divToPrint);
    tela_impressao.print();
    tela_impressao.close();
  }

  getTodosProcessos() {
    const cdconta = sessionStorage.getItem("cd_usuario");
    this.processoService.getTodosProcessos(cdconta).subscribe(data => {
      if (data) {
        this.listaProcesso = data;
        this.valor = data.length;
      }
    });
  }
  getSizePorcentagem(porcentagem: number): any {
    return LayoutService.getHeightScreenAreaWithPercentage(porcentagem);
  }

}
