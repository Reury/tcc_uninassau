import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public cadastrarCliente(cliente: ICliente, cdUsuario:string): Observable<ICliente> {
    return this.http.post<ICliente>(`http://localhost:60409/api/cliente/CadastrarCliente/${cdUsuario}`, cliente);
  }

  public listaClientes(cdUsuario:string): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`http://localhost:60409/api/cliente/GetClientes/${cdUsuario}`);
  }


  public deletarCliente(cdCliente: number): Observable<number> {
    return this.http.get<number>(`http://localhost:60409/api/cliente/DeletarCliente/${cdCliente}`);
  }

  public alterarCliente(Cliente: ICliente): Observable<number> {
    return this.http.post<number>(`http://localhost:60409/api/cliente/ALterarCliente`, Cliente);
  }

}


