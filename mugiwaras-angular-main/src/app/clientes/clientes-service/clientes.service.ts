import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Clientes } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  //Url para obtener el listado de personal
  private baseURL = "http://localhost:8085/ms-mugiwaras/api/clientes/listar";
  
  constructor(private httpClient : HttpClient) {}

  //Para obtener la lista de personal
  obtenerListaDeClientes():Observable<Clientes[]>{
    return this.httpClient.get<Clientes[]>(`${this.baseURL}`);
  }

  //para crear un nuevo empleado
  registrarClientes(clientes:Clientes): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, clientes);

  }
}
