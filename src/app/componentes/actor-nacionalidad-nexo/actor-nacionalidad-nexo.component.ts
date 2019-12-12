import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor/actor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actor-nacionalidad-nexo',
  templateUrl: './actor-nacionalidad-nexo.component.html',
  styleUrls: ['./actor-nacionalidad-nexo.component.css']
})
export class ActorNacionalidadNexoComponent implements OnInit {

  public listadoActores: Array<Actor>;
  public listadoActoresFiltrado: Array<Actor>;
  public filtrado = false;
  public listadoObservable: Observable<any[]>;


  constructor( private actorServ: ActorService ) { }

  ngOnInit() {
    this.TraerActores();
  }

  public TraerActores() {
    // this.actorServ.TraerTodos().then(
    //   data => {this.listadoActores = data.filter(actor => actor.activo);
    //            this.filtrado = false;
    // });
    this.listadoObservable = this.actorServ.TraerTodos2();

    this.listadoObservable
    .subscribe(
      data => {this.listadoActores = data.filter(actor => actor.activo);
               this.filtrado = false;
               console.info(data);
    });
  }

  cambioSelect($event) {
    if ($event === 'todos') {
      this.filtrado = false;
    } else {
      this.listadoActoresFiltrado = new Array<any>();
      console.log($event);
      this.listadoActoresFiltrado = this.listadoActores.filter(actor => actor.nacionalidad === $event);
      this.filtrado = true;
    }
  }
}
