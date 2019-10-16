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
    this.peliculaServ.TraerTodos()
    .subscribe(
      data => {this.peliculas = data;
      // tslint:disable-next-line: no-console
               console.info(data);

    });
  }

AgregarPeliculaClick(): void {
  this.miRouter.navigate(['/peliculas/alta']);
}

}
