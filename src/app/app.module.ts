import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment} from '../environments/environment';


// Mine
import { AppComponent } from './app.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { BtnBorrarComponent } from './componentes/btn-borrar/btn-borrar.component';
import { BuscarInputComponent } from './componentes/buscar-input/buscar-input.component';
import { BuscarMostrarComponent } from './componentes/buscar-mostrar/buscar-mostrar.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PeliculasAltaComponent } from './componentes/peliculas-alta/peliculas-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorModificarComponent } from './componentes/actor-modificar/actor-modificar.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ActorPeliculasListadoComponent } from './componentes/actor-peliculas-listado/actor-peliculas-listado.component';
import { ActorNacionalidadNexoComponent } from './componentes/actor-nacionalidad-nexo/actor-nacionalidad-nexo.component';
import { ActorNacionalidadFiltroComponent } from './componentes/actor-nacionalidad-filtro/actor-nacionalidad-filtro.component';
import { ActorNacionalidadListadoComponent } from './componentes/actor-nacionalidad-listado/actor-nacionalidad-listado.component';
import { ActorDetalleBorradoComponent } from './componentes/actor-detalle-borrado/actor-detalle-borrado.component';
import { ActorGrillaComponent } from './componentes/actor-grilla/actor-grilla.component';
import { UserLoginComponent } from './componentes/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    BtnBorrarComponent,
    BuscarInputComponent,
    BuscarMostrarComponent,
    PeliculasComponent,
    ActorAltaComponent,
    BienvenidoComponent,
    PeliculasAltaComponent,
    ActorListadoComponent,
    ActorModificarComponent,
    NavBarComponent,
    ActorPeliculasListadoComponent,
    ActorNacionalidadNexoComponent,
    ActorNacionalidadFiltroComponent,
    ActorNacionalidadListadoComponent,
    ActorDetalleBorradoComponent,
    ActorGrillaComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
