import { Component, OnInit }  from '@angular/core';
import { Opiniones }             from '../opiniones-service/opiniones';
import { OpinionesService }      from '../opiniones-service/opiniones.service';
@Component({
  selector: 'app-listar-opiniones',
  templateUrl: './listar-opiniones.component.html',
  styleUrls: ['./listar-opiniones.component.css']
})
export class ListarOpinionesComponent implements OnInit {

  opiniones:Opiniones[];

  constructor(private opinionesServicio:OpinionesService){ }
  

  ngOnInit(): void {

    this.obtenerClientes();
      
  }

  private obtenerClientes(){
    this.opinionesServicio.obtenerListaDeClientes().subscribe(dato => {
      this.opiniones = dato;
    });
  }
 

}
