import { Injectable } from '@angular/core';
import { MiservicioPrincipalService } from '../miservicioPrincipal/miservicio-principal.service';
import { Pelicula } from 'src/app/clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private httpClient: MiservicioPrincipalService<Pelicula>) {}

  //  public TraerUno(id: number): {
  //   return this.httpClient.GetHttp('actores/', id);
  // }

  public TraerTodos() {
    return this.httpClient.HttpGetAll('pelicula/listar/');
  }

  public CrearUno(prod: Pelicula) {
    return this.httpClient.PostHttp('pelicula/alta/', prod);
  }

  public ModificarUno(prod: Pelicula) {
    return this.httpClient.PostHttp('pelicula/modificar/', prod);
  }

  public BorrarUno(id: number) {
    return this.httpClient.DeleteHttp('pelicula/eliminar/', id);
  }
}
