import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/servicios/actor/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public actor: Actor;
  public nombreError: boolean;
  public apellidoError: boolean;
  public nacionalidadError: boolean;
  public fechaDeNacimientoError: boolean;

  constructor(private actorService: ActorService, private router: Router) { }

  ngOnInit() {
    this.ReestablecerTodo();
  }

  ReestablecerTodo() {
    this.actor = new Actor();
    this.nombreError = false;
    this.apellidoError = false;
    this.nacionalidadError = false;
    this.fechaDeNacimientoError = false;
  }

  Agregar() {
    if (this.ValidarCampos() !== false) {
      this.actor.activo = true;
      this.actorService.CrearUno(JSON.parse( JSON.stringify(this.actor)))
      .then();
      alert('Se agregó el actor correctamente!');
      this.ReestablecerTodo();
    }
  }

 ValidarCampos() {
    let result = true;

    if (this.actor.nombre === '' || this.actor.nombre === undefined) {
      this.nombreError = true;
      result = false;
    }
    if (this.actor.apellido === '' || this.actor.apellido === undefined) {
      this.apellidoError = true;
      result = false;
    }
    if (this.actor.nacionalidad === '' || this.actor.nacionalidad === undefined) {
      this.nacionalidadError = true;
      result = false;
    }
    if (this.actor.fechaDeNacimiento == null || this.actor.fechaDeNacimiento === undefined) {
      this.fechaDeNacimientoError = true;
      result = false;
    }

    return result;
  }
}
