import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarRutaService {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

      const url: string = state.url;
      // console.log('url dentro de canActivate', url);
      // console.log(route);
      // console.log('estado ', state);
      // console.log(this.auth.isAuth());
      if ( this.auth.isAuth() ) {
        return true;
      } else {
        this.router.navigate(['']);
        return !true;
      }
    }

}
