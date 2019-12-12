import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';

@Component({
  selector: 'app-buscar-mostrar',
  templateUrl: './buscar-mostrar.component.html',
  styleUrls: ['./buscar-mostrar.component.css']
})
export class BuscarMostrarComponent implements OnInit {

  public peliculas: Array<Pelicula>;
  public volverBtn = false;
  public noEncontro = false;

  constructor(private peliculaServ: PeliculaService) { }

  ngOnInit() {
    this.CargarPeliculas();

  }

  BuscarPeliculas(peliculasBusqueda: Array<Pelicula>) {
    if (peliculasBusqueda.length > 0) {
      this.peliculas = peliculasBusqueda;
      this.noEncontro = false;
      this.volverBtn = true;
    } else {
      this.peliculas = peliculasBusqueda;
      this.noEncontro = true;
    }
  }

  CargarPeliculas(){
    this.peliculaServ.TraerTodos().then(
      data => {this.peliculas = data;
               console.log(data);
               this.volverBtn = false;
               this.noEncontro = false;
    });
  }





}
