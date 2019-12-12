import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-grilla',
  templateUrl: './actor-grilla.component.html',
  styleUrls: ['./actor-grilla.component.css']
})
export class ActorGrillaComponent implements OnInit {

  @Input() listadoActores: Array<Actor> = Array<Actor>();
  @Output() borrado: EventEmitter<any> = new EventEmitter<any>();
  @Output() modificado: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }


  public RecibirYEmitirBorrado( actor: Actor) { // output btnBorrar
    this.borrado.emit(actor);
  }

  public EmitirModificado( actor: Actor) { // output btnBorrar
    this.modificado.emit(actor);
  }

}
