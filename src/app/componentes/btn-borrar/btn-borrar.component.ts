import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor/actor.service';

@Component({
  selector: 'app-btn-borrar',
  templateUrl: './btn-borrar.component.html',
  styleUrls: ['./btn-borrar.component.css']
})
export class BtnBorrarComponent implements OnInit {

  @Input() objetoABorrar;
  @Input() queBorro: string;
  @Output() borrado: EventEmitter<any> = new EventEmitter<any>();

  constructor( private peliculaServ: PeliculaService, private actorServ: ActorService ) {}

  private Borrar() {

    if ( this.queBorro === 'pelicula' ) {
      this.peliculaServ.BorrarUno((this.objetoABorrar as Pelicula).id)
      .then( () => {
        this.borrado.emit((this.objetoABorrar as Pelicula).id); // mando id peli para que lo saque del array de peliculas
      })
      .catch( error => {
        console.log(error);
      });
    } else if ( this.queBorro === 'actor' ) {
      (this.objetoABorrar as Actor).activo = false;
      this.actorServ.ModificarUno(JSON.parse( JSON.stringify(this.objetoABorrar)))
      .then( () => {
        this.borrado.emit(this.objetoABorrar); // mando objeto actor para que lo muestre despues de la baja logica
      })
      .catch( error => {
        console.log(error);
      });
    }
  }

  ngOnInit() {
  }

}
