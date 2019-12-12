import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor/actor.service';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  public listadoActores: Array<Actor>;
  public mostrarListado = true;
  public actorBorrado: Actor;


  constructor( private actorServ: ActorService,
               private miRouter: Router ) { }


  ngOnInit() {
    this.TraerActores();
  }


  // public RefrescarLista( seModifico: boolean ) {
  //   if (seModifico) {
  //     this.TraerActores();
  //   }
  //   this.mostrarListado = true;
  // }

  public MostrarBorradoYActualizarLista( actor: Actor) { // output btnBorrar
    this.actorBorrado = actor;
    this.listadoActores = this.listadoActores.filter(item => item.id !== actor.id);
    this.mostrarListado = false;
  }



  public TraerActores() {
    this.actorServ.TraerTodos().then(
      data => {this.listadoActores = data.filter(actor => actor.activo);
               console.log(data);
    });
  }


  public IrAModificarClick(actor: Actor) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          id: actor.id,
          nombre: actor.nombre,
          apellido: actor.apellido,
          nacionalidad: actor.nacionalidad,
          fechaDeNacimiento: actor.fechaDeNacimiento,
          fotoEstrella: actor.fotoEstrella,
      }
    };
    this.miRouter.navigate(['/actor/modificar'], navigationExtras);
  }


}
