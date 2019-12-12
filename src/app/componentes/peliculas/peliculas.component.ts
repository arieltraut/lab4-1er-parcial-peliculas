import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

  constructor(private peliculaServ: PeliculaService,
              private miRouter: Router) { }

  ngOnInit() {
    this.peliculaServ.TraerTodos().then(
      data => {this.peliculas = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
               console.log(data);
    });
  }

  AgregarPeliculaClick(): void {
    this.miRouter.navigate(['/peliculas/alta']);
  }

}
