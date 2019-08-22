import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProcesso } from 'src/app/Interfaces/IProcesso';
import { ProcessoService } from 'src/app/services/processo/processo.service';
import { LayoutService } from 'src/app/helpers/layout.service';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {

  formulario: FormGroup;
  cadastro: boolean;
  reusultado: number;
  processoObj = {} as IProcesso;
  listaProcesso: IProcesso[];
  cdCliente: number;

  @ViewChild('alert') alertBI: any;

  constructor(private rota: Router, private route: ActivatedRoute
    , private formBuilder: FormBuilder, private processoService: ProcessoService) {
    this.route.params.subscribe(res => this.cdCliente = res.id);
  }

  ngOnInit() {
    this.createForm();
    this.getListaProcessso();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      processo: ['', Validators.required],
      polo_ativo: [''],
      polo_passivo: [''],
      valor: [''],
      parcelas: [''],
      vencimento: [''],
      tipo: [''],
      status: [''],
      multa: [''],
      desconto: ['']
    });
  }
  excluirProcesso(processo) {
    this.processoService.ExcluirProcesso(processo).subscribe(data => {
      if (data > 0) {
        this.alertBI.toastConfirmacao('Processo excluído com sucesso!', EClasseAlertas.AlertSuccess);
        this.listaProcesso.splice(this.listaProcesso.indexOf(processo), 1);
      }
    });
  }


  onSubmit() {
    this.atribuirValores();
    if (this.processoObj.processo_id) {
      this.processoService.AlterarProcesso(this.processoObj).subscribe(data => {
        this.getListaProcessso();

        this.alertBI.toastConfirmacao('Processo atualizado com sucesso!', EClasseAlertas.AlertSuccess);
        this.formulario.reset();

      });
    } else {
      this.processoService.cadastrarProcesso(this.processoObj, this.cdCliente).subscribe(data => {
        if (data) {
          this.getListaProcessso();
          this.formulario.reset();
         /*  this.listaProcesso.push(this.processoObj); */
          this.alertBI.toastConfirmacao('Processo cadastrado com sucesso!', EClasseAlertas.AlertSuccess);
        }
      });
    }
    /*  this.resetar(); */
  }
  editarProcesso(processo) {
    this.processoObj = processo;
    this.formulario.get('processo').setValue(processo.processo);
    this.formulario.get('polo_ativo').setValue(processo.polo_ativo);
    this.formulario.get('polo_passivo').setValue(processo.polo_passivo);
    this.formulario.get('valor').setValue(processo.valor);
    this.formulario.get('vencimento').setValue(processo.vencimento);
    this.formulario.get('tipo').setValue(processo.tipo);
    this.formulario.get('status').setValue(processo.status);
    this.formulario.get('multa').setValue(processo.multa);
    this.formulario.get('multa').setValue(processo.multa);
    this.formulario.get('parcelas').setValue(processo.parcelas);
    this.formulario.get('desconto').setValue(processo.desconto);
  }

  atribuirValores() {
    this.processoObj.processo = this.formulario.get('processo').value;
    this.processoObj.polo_ativo = this.formulario.get('polo_ativo').value;
    this.processoObj.polo_passivo = this.formulario.get('polo_passivo').value;
    this.processoObj.valor = this.formulario.get('valor').value;
    this.processoObj.parcelas = this.formulario.get('parcelas').value;
    this.processoObj.vencimento = this.formulario.get('vencimento').value;
    this.processoObj.tipo = this.formulario.get('tipo').value;
    this.processoObj.status = this.formulario.get('status').value;
    this.processoObj.multa = this.formulario.get('multa').value;
    this.processoObj.desconto = this.formulario.get('desconto').value;
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicarCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  getListaProcessso() {
    this.processoService.getProcessos(this.cdCliente).subscribe(data => {
      this.listaProcesso = data;
    });
  }

  getSizePorcentagem(porcentagem: number): any {
    return LayoutService.getHeightScreenAreaWithPercentage(porcentagem);
  }
}
