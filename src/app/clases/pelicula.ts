import { Actor } from './actor';

export class Pelicula {
  public id: string;
  public nombre: string;
  public tipo: string;
  public fechaDeEstreno: Date;
  public cantDePublico: number;
  public rutaDeFoto: string;
  public estrellaPrincipal: Actor;
}
