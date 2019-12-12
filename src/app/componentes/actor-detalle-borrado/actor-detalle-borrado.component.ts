import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-detalle-borrado',
  templateUrl: './actor-detalle-borrado.component.html',
  styleUrls: ['./actor-detalle-borrado.component.css']
})
export class ActorDetalleBorradoComponent implements OnInit {

  @Input() actor: Actor;

  constructor() { }

  ngOnInit() {
  }

}
