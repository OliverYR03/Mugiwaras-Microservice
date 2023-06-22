import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonalComponent } from './personal/lista-personal/lista-personal.component';
import { RegistrarPersonalComponent } from './personal/registrar-personal/registrar-personal.component';
import { ListarPlatosComponent } from './platos/listar-platos/listar-platos.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { ListarOpinionesComponent } from './opiniones/listar-opiniones/listar-opiniones.component';
import { ListarOrdenComponent } from './ordenes/listar-orden/listar-orden.component';
import { RegistrarPlatosComponent } from './platos/registrar-platos/registrar-platos.component';
import { EditarPlatoComponent } from './platos/editar-plato/editar-plato.component';

const routes: Routes = [
  // RUTAS DE LISTA
  {path : 'personal', component:ListaPersonalComponent},
  {path : 'platos', component:ListarPlatosComponent},
  {path : 'clientes', component:ListarClientesComponent},
  {path : 'opiniones', component:ListarOpinionesComponent},
  {path : 'ordenes', component:ListarOrdenComponent},
  {path :'', redirectTo:'personal', pathMatch:'full'},
  //NUEVOS
  {path : 'registrar-personal', component: RegistrarPersonalComponent},
  {path : 'platos/nuevo', component: RegistrarPlatosComponent},

  //EDITAR
   {path : 'platos/editar/:id', component: EditarPlatoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


