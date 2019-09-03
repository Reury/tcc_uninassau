import { PipeTransform, Pipe } from '@angular/core';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { ESearch } from 'src/app/enuns/e-serach.enum';
import { IProcesso } from 'src/app/Interfaces/IProcesso';


@Pipe({
  name: 'pesquisarFilter'
})
export class PesquisarFilterPipe implements PipeTransform {
  objRetorno: any[];
  transform(obj: any[], value: string, tipo: ESearch): any {

    if (value === undefined || value === "") {
      return obj;
    }

    switch (tipo) {
      case ESearch.ECliente:
        if (value) {
          value = value.toLowerCase();
          this.objRetorno = obj.filter((ob: ICliente) => ob.nome.toLocaleLowerCase().includes(value)
          || ob.bairro.toLocaleLowerCase().includes(value));
        }
        break;
    }

    switch (tipo) {
      case ESearch.EProcesso:
        if (value) {
          value = value.toLowerCase();
          this.objRetorno = obj.filter((ob: IProcesso) => ob.processo.toLocaleLowerCase().includes(value)
          || ob.status.toLocaleLowerCase().includes(value));
        }
        break;
    }
    return this.objRetorno;
  }

}
