import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';

@Component({
  selector: 'app-buscar-input',
  templateUrl: './buscar-input.component.html',
  styleUrls: ['./buscar-input.component.css']
})
export class BuscarInputComponent implements OnInit {

    @Output() resultadoBuscar: EventEmitter<Pelicula[]> = new EventEmitter<Pelicula[]>();
    public modelo: string;
    private peliculas: Array<Pelicula>;

  constructor(private peliculaServ: PeliculaService) { }

  ngOnInit() {
  }

  public BuscarClicked() {
    // if (this.modelo == undefined) {
    //   return false;
    // }

    this.peliculaServ.TraerTodos()
    .then(
      // tslint:disable-next-line: triple-equals
      data => {this.peliculas = data.filter(pelicula => pelicula.nombre.toUpperCase() == this.modelo.toUpperCase());
               console.log(data);
               if (this.peliculas.length < 1) {
        // alert('No se encontraron resultados');
        this.peliculas = [];
        console.log(this.peliculas);
        this.resultadoBuscar.emit(this.peliculas);
      } else {
        this.resultadoBuscar.emit(this.peliculas);
      }
    });
  }

}
