import { Component, OnInit } from '@angular/core';
import { Ordenes } from '../ordenes-service/ordenes';
import { ActivatedRoute,Router } from '@angular/router';
import { OrdenesService } from '../ordenes-service/ordenes.service';

@Component({
  selector: 'app-registrar-orden',
  templateUrl: './registrar-orden.component.html',
  styleUrls: ['./registrar-orden.component.css']
})
export class RegistrarOrdenComponent {

  id:number;
  ordenes: Ordenes = new Ordenes();
  constructor(private route:ActivatedRoute, private ordenesServicio: OrdenesService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ordenesServicio.obtenerOrdenPorId(this.id).subscribe(dato=> {
      this.ordenes = dato;
    },error => console.log(error));
  }


  irALaListaDeOrden(){
    this.router.navigate(['/ordenes']);
  }

  onSubmit(){
    this.ordenesServicio.actualizarOrden(this.id,this.ordenes).subscribe(dato => {
      this.irALaListaDeOrden();
    },error => console.log(error));
  }

}