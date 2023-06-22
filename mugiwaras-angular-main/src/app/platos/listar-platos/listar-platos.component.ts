import { Component, OnInit }  from '@angular/core';
import { Platos }             from '../platos-service/platos';
import { PlatosService }      from '../platos-service/platos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './listar-platos.component.html',
  styleUrls: ['./listar-platos.component.css']
})
export class ListarPlatosComponent implements OnInit{

  platos: Platos[];

  constructor(private platosServicio:PlatosService, private router:Router){

  }

  ngOnInit(): void {
    this.obtenerPlatos();
  }

  actualizarPlato(id:number){
    this.router.navigate(['platos/editar', id]);
  }
  
  private obtenerPlatos(){
    this.platosServicio.obtenerListaDePlatos().subscribe(dato => {
      this.platos = dato;
    });
  }

  eliminarPlato(id:number){
    this.platosServicio.eliminarPlato(id).subscribe(dato => {
      console.log(dato);
      this.obtenerPlatos();
    });
  }

  
  

}

  
  

