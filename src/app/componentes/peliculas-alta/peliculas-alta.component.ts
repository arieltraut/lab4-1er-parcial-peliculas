import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent implements OnInit {

  public pelicula: Pelicula;
  public descError: boolean;
  public tipoError: boolean;
  public fechaDeVencError: boolean;
  public precioError: boolean;

  constructor(private peliculaServ: PeliculaService, private miRouter: Router) { }

  ngOnInit() {
    this.ReestablecerTodo();
  }

  ReestablecerTodo() {
    this.pelicula = new Pelicula();
    this.descError = false;
    this.tipoError = false;
    this.fechaDeVencError = false;
    this.precioError = false;
  }

  Agregar() {
    if (this.ValidarCampos() != false) {
      this.pelicula.rutaDeFoto = '../../../assets/imagenes/default.png';
      this.peliculaServ.CrearUno(this.pelicula)
      .subscribe();
      // alert('Se agregó el pelicula correctamente!');
      this.ReestablecerTodo();
    }
  }

 ValidarCampos() {
    let result = true;

    if (this.pelicula.nombre == '' || this.pelicula.nombre == undefined) {
      this.descError = true;
      result = false;
    }
    if (this.pelicula.tipo == 'null' || this.pelicula.tipo == undefined) {
      this.tipoError = true;
      result = false;
    }
    if (this.pelicula.fechaDeEstreno == null || this.pelicula.fechaDeEstreno == undefined) {
      this.fechaDeVencError = true;
      result = false;
    }
    if (this.pelicula.cantDePublico == null || this.pelicula.cantDePublico == undefined) {
      this.precioError = true;
      result = false;
    }
    return result;
  }

  VolverAPeliculasClick(): void {
    this.miRouter.navigate(['/peliculas']);
  }



}
