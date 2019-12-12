import { Injectable } from '@angular/core';
import { MiservicioPrincipalService } from '../miservicioPrincipal/miservicio-principal.service';
import { Pelicula } from 'src/app/clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private miServicio: MiservicioPrincipalService<Pelicula>) {}

   public TraerUno(id: number) {
    return this.miServicio.TraerUno('peliculas', id);
  }

  public TraerTodos() {
    return this.miServicio.TraerTodos2('peliculas');
  }

  public CrearUno(peli: Pelicula) {
    return this.miServicio.AgregarUno(peli, 'peliculas');
  }

  public ModificarUno(peli: Pelicula) {
    return this.miServicio.ModificarUno(peli, 'peliculas');
  }

  public BorrarUno(id: string) {
    return this.miServicio.BorrarUno(id, 'peliculas');
  }
}
