import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ListaPersonalComponent } from './personal/lista-personal/lista-personal.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPersonalComponent } from './personal/registrar-personal/registrar-personal.component';
import { FormsModule } from '@angular/forms';
import { ListarPlatosComponent } from './platos/listar-platos/listar-platos.component';
import { RegistrarPlatosComponent } from './platos/registrar-platos/registrar-platos.component';
import { RegistrarOrdenComponent } from './ordenes/registrar-orden/registrar-orden.component';
import { ListarOrdenComponent } from './ordenes/listar-orden/listar-orden.component';
import { ListarOpinionesComponent } from './opiniones/listar-opiniones/listar-opiniones.component';
import { RegistrarOpinionComponent } from './opiniones/registrar-opinion/registrar-opinion.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { RegistrarClientesComponent } from './clientes/registrar-clientes/registrar-clientes.component';
import { EditarPlatoComponent } from './platos/editar-plato/editar-plato.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonalComponent,
    RegistrarPersonalComponent,
    ListarPlatosComponent,
    RegistrarPlatosComponent,
    RegistrarOrdenComponent,
    ListarOrdenComponent,
    ListarOpinionesComponent,
    RegistrarOpinionComponent,
    ListarClientesComponent,
    RegistrarClientesComponent,
    EditarPlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
