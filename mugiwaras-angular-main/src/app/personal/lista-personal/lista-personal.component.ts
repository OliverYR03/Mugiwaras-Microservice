import { Component, OnInit } from '@angular/core';
import { Personal } from '../servicio-personal/personal';
import { PersonalService } from '../servicio-personal/personal.service';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.css']
})
export class ListaPersonalComponent implements OnInit {

  personal:Personal[];

  constructor(private personalServicio:PersonalService){ }
  

  ngOnInit(): void {

    this.obtenerPersonal();
      
  }

  private obtenerPersonal(){
    this.personalServicio.obtenerListaDePersonal().subscribe(dato => {
      this.personal = dato;
    });
  }
 

}
