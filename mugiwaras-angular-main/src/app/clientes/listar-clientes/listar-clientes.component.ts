import { Component, OnInit }  from '@angular/core';
import { Clientes }             from '../clientes-service/clientes';
import { ClientesService }      from '../clientes-service/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

    clientes:Clientes[];
  
    constructor(private clientesServicio:ClientesService){ }
    
  
    ngOnInit(): void {
  
      this.obtenerClientes();
        
    }
  
    private obtenerClientes(){
      this.clientesServicio.obtenerListaDeClientes().subscribe(dato => {
        this.clientes = dato;
      });
    }
   
  
  }