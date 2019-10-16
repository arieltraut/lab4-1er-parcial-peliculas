import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { BtnBorrarComponent } from './componentes/btn-borrar/btn-borrar.component';
import { BuscarInputComponent } from './componentes/buscar-input/buscar-input.component';
import { BuscarMostrarComponent } from './componentes/buscar-mostrar/buscar-mostrar.component';
import { ProductoAltaComponent } from './componentes/producto-alta/producto-alta.component';
import { ProductoModificarComponent } from './componentes/producto-modificar/producto-modificar.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PeliculasAltaComponent } from './componentes/peliculas-alta/peliculas-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    GrillaComponent,
    BtnBorrarComponent,
    BuscarInputComponent,
    BuscarMostrarComponent,
    ProductoAltaComponent,
    ProductoModificarComponent,
    PeliculasComponent,
    ActorAltaComponent,
    BienvenidoComponent,
    PeliculasAltaComponent,
    ActorListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
