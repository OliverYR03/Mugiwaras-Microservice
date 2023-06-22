import { Component, OnInit } from '@angular/core';
import { Ordenes }             from '../ordenes-service/ordenes';
import { OrdenesService }      from '../ordenes-service/ordenes.service';


@Component({
  selector: 'app-listar-orden',
  templateUrl: './listar-orden.component.html',
  styleUrls: ['./listar-orden.component.css']
})
export class ListarOrdenComponent implements OnInit {

  ordenes:Ordenes[];

  constructor(private ordenesServicio:OrdenesService){ }
  

  ngOnInit(): void {

    this.obtenerClientes();
      
  }

  private obtenerClientes(){
    this.ordenesServicio.obtenerListaDeOrdenes().subscribe(dato => {
      this.ordenes = dato;
    });
  }
 

}
