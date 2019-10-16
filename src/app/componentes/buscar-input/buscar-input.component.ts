import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
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
    private errorMsj;

  constructor(private peliculaServ: PeliculaService) { }

  ngOnInit() {
  }



  public BuscarClicked() {
    // if (this.modelo == undefined) {
    //   return false;
    // }

    this.peliculaServ.TraerTodos()
    .subscribe(
      // tslint:disable-next-line: triple-equals
      data => {this.peliculas = data.filter(pelicula => pelicula.nombre.toUpperCase() == this.modelo.toUpperCase());
               console.log(data);
      // error => this.errorMsj = error;
               if (this.peliculas.length < 1) {
        alert('No se encontraron resultados');
        this.peliculas = [];
        console.log(this.peliculas);
        this.resultadoBuscar.emit(this.peliculas);
      } else {
        this.resultadoBuscar.emit(this.peliculas);
      }
    });
  }

}
