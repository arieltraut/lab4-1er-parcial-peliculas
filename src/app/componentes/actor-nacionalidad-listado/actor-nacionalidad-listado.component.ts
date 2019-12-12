import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-nacionalidad-listado',
  templateUrl: './actor-nacionalidad-listado.component.html',
  styleUrls: ['./actor-nacionalidad-listado.component.css']
})
export class ActorNacionalidadListadoComponent implements OnInit {

  @Input() listadoActores: Array<Actor> = Array<Actor>();

  constructor() { }

  ngOnInit() {
  }

}
