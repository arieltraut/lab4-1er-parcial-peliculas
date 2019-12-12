import { Injectable } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MiservicioPrincipalService } from '../miservicioPrincipal/miservicio-principal.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private miServicio: MiservicioPrincipalService<Actor>) {}

  public TraerUno(id: number) {
    return this.miServicio.TraerUno('actores', id);
  }

  public TraerTodos() {
    return this.miServicio.TraerTodos2('actores');
  }

  public TraerTodos2() {
    return this.miServicio.TraerTodos('actores');
  }

  public CrearUno(actor: Actor) {
    return this.miServicio.AgregarUno(actor, 'actores');
  }

  public ModificarUno(actor: Actor) {
    return this.miServicio.ModificarUno(actor, 'actores');
  }
}
