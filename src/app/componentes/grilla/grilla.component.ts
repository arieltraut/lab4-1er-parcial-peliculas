import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Router, NavigationExtras } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {


  @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  @Input() listadoProductos: Array<Pelicula> = Array<Pelicula>();


  constructor(private miRouter: Router) { }

  ngOnInit() {
  }

  public RefrescarLista( idPelicula: number ) {
    this.listadoPeliculas = this.listadoPeliculas.filter(item => item.id !== idPelicula);
  }

  public IrAModificarClick(producto: Producto) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          id: producto.id,
          descripcion: producto.descripcion,
          tipo: producto.tipo,
          fechaDeVencimiento: producto.fechaDeVencimiento,
          precio: producto.precio,
          rutaDeFoto: producto.rutaDeFoto
      }
    };
    this.miRouter.navigate(['/productos/modificar'], navigationExtras);
  }


}
