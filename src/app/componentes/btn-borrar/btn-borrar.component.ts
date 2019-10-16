import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';

@Component({
  selector: 'app-btn-borrar',
  templateUrl: './btn-borrar.component.html',
  styleUrls: ['./btn-borrar.component.css']
})
export class BtnBorrarComponent implements OnInit {

  @Input() idPelicula: number;
  @Output() borrado: EventEmitter<number> = new EventEmitter<number>();

  constructor( private peliculaServ: PeliculaService ) {}

  private Borrar() {
    this.peliculaServ.BorrarUno(this.idPelicula)
    .subscribe( () => {
      this.borrado.emit(this.idPelicula);
    });
  }

  ngOnInit() {
  }

}
