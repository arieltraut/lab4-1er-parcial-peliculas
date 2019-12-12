import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {


  @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  @Input() actorSeleccionado: Actor;
  @Input() filtra: false;



  constructor(private miRouter: Router) { }

  ngOnInit() {
    // console.log('prueba');
    // console.log(this.actorSeleccionado);
    if (this.filtra) {
          this.listadoPeliculas = this.listadoPeliculas
          .filter(item => item.estrellaPrincipal.id === this.actorSeleccionado.id);
    }
  }


  public RefrescarLista( idPelicula: string ) { // evento btn borrar
    this.listadoPeliculas = this.listadoPeliculas.filter(item => item.id !== idPelicula);
  }




}
