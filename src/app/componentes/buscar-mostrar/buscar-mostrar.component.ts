import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-buscar-mostrar',
  templateUrl: './buscar-mostrar.component.html',
  styleUrls: ['./buscar-mostrar.component.css']
})
export class BuscarMostrarComponent implements OnInit {

  public peliculasFiltrados: Array<Pelicula>;

  constructor() { }

  ngOnInit() {
  }

  CargarPeliculas(peliculasBusqueda: Array<Pelicula>) {
    this.peliculasFiltrados = peliculasBusqueda;
  }

}
