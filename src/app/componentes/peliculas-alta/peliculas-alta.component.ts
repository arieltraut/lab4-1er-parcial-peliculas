import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor/actor.service';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent implements OnInit {

  public pelicula: Pelicula;
  public actor: Actor;
  listadoActores: Array<Actor>;

  public descError: boolean;
  public tipoError: boolean;
  public fechaDeVencError: boolean;
  public precioError: boolean;

  constructor(private peliculaServ: PeliculaService,
              private actorServ: ActorService,
              private miRouter: Router) { }

  ngOnInit() {
    this.ReestablecerTodo();
    this.ObtenerActores();
  }

  ReestablecerTodo() {
    this.actor = null;
    this.pelicula = new Pelicula();
    this.pelicula.tipo = null;
    this.descError = false;
    this.tipoError = false;
    this.fechaDeVencError = false;
    this.precioError = false;
  }

  Agregar() {
    if (this.ValidarCampos() !== false) {
      this.pelicula.estrellaPrincipal = JSON.parse( JSON.stringify(this.actor));
      this.pelicula.rutaDeFoto = '../../../assets/blade.jpg';
      this.peliculaServ.CrearUno(JSON.parse( JSON.stringify(this.pelicula))); // then catch
      // alert('Se agregó el pelicula correctamente!');
      this.ReestablecerTodo();
    }
  }


 ValidarCampos() {
    let result = true;

    if (this.pelicula.nombre === '' || this.pelicula.nombre === undefined) {
      this.descError = true;
      result = false;
    }
    if (this.pelicula.tipo === 'null' || this.pelicula.tipo === undefined) {
      this.tipoError = true;
      result = false;
    }
    if (this.pelicula.fechaDeEstreno == null || this.pelicula.fechaDeEstreno === undefined) {
      this.fechaDeVencError = true;
      result = false;
    }
    if (this.pelicula.cantDePublico == null || this.pelicula.cantDePublico === undefined) {
      this.precioError = true;
      result = false;
    }
    return result;
  }

  VolverAPeliculasClick(): void {
    this.miRouter.navigate(['/peliculas']);
  }

  ObtenerActores() {
    this.actorServ.TraerTodos()
    .then(x => {
      this.listadoActores = x;
    });
  }



}
