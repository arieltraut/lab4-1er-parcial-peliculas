import { Injectable } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MiservicioPrincipalService } from '../miservicioPrincipal/miservicio-principal.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private httpClient: MiservicioPrincipalService<Actor>) {}

  //  public TraerUno(id: number): {
  //   return this.httpClient.GetHttp('actores/', id);
  // }

  public TraerTodos() {
    return this.httpClient.HttpGetAll('actor/listar/');
  }

  public CrearUno(actor: Actor) {
    return this.httpClient.PostHttp('actor/alta/', actor);
  }

  // public ModificarUno(prod: Pelicula) {
  //   return this.httpClient.PostHttp('pelicula/modificar/', prod);
  // }

  // public BorrarUno(id: number) {
  //   return this.httpClient.DeleteHttp('pelicula/eliminar/', id);
  // }
}
