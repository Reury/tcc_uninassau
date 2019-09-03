import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProcesso } from 'src/app/Interfaces/IProcesso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private http: HttpClient) { }

  public cadastrarProcesso(processo: IProcesso, cdCliente: number,cdUsuario: string): Observable<number> {
    return this.http.post<number>(`http://localhost:60409/api/processo/CadastrarProcesso/${cdCliente}/${cdUsuario}`, processo);
  }

  public getProcessos(cdCliente : any, cdUsuario: any): Observable<IProcesso[]> {
    return this.http.get<IProcesso[]>(`http://localhost:60409/api/processo/ListarProcessos/${cdCliente}/${cdUsuario}`);
  }

  public getTodosProcessos(cdUsuario:string): Observable<IProcesso[]> {
    return this.http.get<IProcesso[]>(`http://localhost:60409/api/processo/ListarTodosProcessos/${cdUsuario}`);
  }

  public ExcluirProcesso(processo: IProcesso): Observable<number> {
    return this.http.post<number>(`http://localhost:60409/api/processo/ExcluirProcesso/`, processo);
  }

  public AlterarProcesso(processo: IProcesso): Observable<number> {
    return this.http.post<number>(`http://localhost:60409/api/processo/AlterarProcesso`, processo);
  }

}
