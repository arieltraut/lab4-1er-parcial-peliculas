// import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { BuscarMostrarComponent } from './componentes/buscar-mostrar/buscar-mostrar.component';
import { BuscarInputComponent } from './componentes/buscar-input/buscar-input.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PeliculasAltaComponent } from './componentes/peliculas-alta/peliculas-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorPeliculasListadoComponent } from './componentes/actor-peliculas-listado/actor-peliculas-listado.component';
import { ActorModificarComponent } from './componentes/actor-modificar/actor-modificar.component';
import { ActorNacionalidadNexoComponent } from './componentes/actor-nacionalidad-nexo/actor-nacionalidad-nexo.component';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { ValidarRutaService } from './servicios/auth/validar-ruta.service';


const routes: Routes = [
  // {path: 'inicio', component: BienvenidoComponent, data: {animation: 'FadePage'}},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'bienvenido', component: BienvenidoComponent, data: {animation: 'bienvenido'}},
  {path: 'peliculas/alta', component: PeliculasAltaComponent, canActivate: [ValidarRutaService]},
  {path: 'peliculas', component: PeliculasComponent, data: {animation: 'peliculas'}},
  {path: 'grilla', component: GrillaComponent},
  {path: 'busqueda', component: BuscarMostrarComponent, data: {animation: 'buscar'}},
  {path: 'busqueda-input', component: BuscarInputComponent},
  {path: 'actor/alta', component: ActorAltaComponent, canActivate: [ValidarRutaService]},
  {path: 'actor/listado', component: ActorListadoComponent, data: {animation: 'actores'}},
  {path: 'actor/peliculas', component: ActorPeliculasListadoComponent, data: {animation: 'actores-peliculas'}},
  {path: 'peliculas/listado', component: PeliculasComponent},
  {path: 'actor/modificar', component: ActorModificarComponent},
  {path: 'actor/nexo', component: ActorNacionalidadNexoComponent, data: {animation: 'nacionalidades'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
