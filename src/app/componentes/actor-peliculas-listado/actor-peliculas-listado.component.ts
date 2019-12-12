import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/servicios/actor/actor.service';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-actor-peliculas-listado',
  templateUrl: './actor-peliculas-listado.component.html',
  styleUrls: ['./actor-peliculas-listado.component.css']
})
export class ActorPeliculasListadoComponent implements OnInit {

  constructor( private actorServ: ActorService, private peliculaServ: PeliculaService) { }

  public peliculas: Array<Pelicula>;
  public actores: Array<Actor>;
  public actorSeleccion: Array<Actor>;
  public pelisDeActor: Array<Pelicula> = new Array<Pelicula>();
  public actor: Actor = null;


  ngOnInit() {
    // this.actor = new Actor();
    this.ObtenerActores();
    this.ObtenerPeliculas();
  }

  cambioSelect() {
    this.pelisDeActor = new Array<any>();

    if (this.actor) {
      this.actorSeleccion = this.actores.filter(actor => actor.id === this.actor.id);
    } else {
      this.actorSeleccion = this.actores;
    }
  }


  ObtenerActores() {
    this.actorServ.TraerTodos()
    .then(x => {
      this.actores = x.filter(actor => actor.activo);
    });
  }

  ObtenerPeliculas() {
    this.peliculaServ.TraerTodos()
    .then(x => {
      this.peliculas = x;
      this.cambioSelect();
    });
  }

}
