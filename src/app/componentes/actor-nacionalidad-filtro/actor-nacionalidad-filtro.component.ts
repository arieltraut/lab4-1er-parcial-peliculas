import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actor-nacionalidad-filtro',
  templateUrl: './actor-nacionalidad-filtro.component.html',
  styleUrls: ['./actor-nacionalidad-filtro.component.css']
})
export class ActorNacionalidadFiltroComponent implements OnInit {

  @Output() nacionalidadSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  @Input() actores: Observable<any[]>;
  public nacionalidades;
  public nacionalidad = 'todos';

  constructor() {}

  ngOnInit() {
    // set remueve nacionalidades duplicadas
    console.log('hola');
    console.log(this.actores);
    let aux = [];

    this.actores
    .subscribe(
      data => {aux = data.filter(actor => actor.activo);
               this.nacionalidades = [...new Set(aux.map(actor => actor.nacionalidad))];

    });

  }

  cambioSelect() {
    this.nacionalidadSeleccionada.emit(this.nacionalidad);
  }





}
