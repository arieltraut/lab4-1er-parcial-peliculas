import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {auth} from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { MiservicioPrincipalService } from '../miservicioPrincipal/miservicio-principal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logeado: any = false;

  constructor( public afAuth: AngularFireAuth,
               public afs: AngularFirestore,
               public miServ: MiservicioPrincipalService,
               public router: Router,
    ) {
    // afAuth.authState.subscribe(user => (this.logeado = user));

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.logeado = user;

        this.guardarEnStorage(user);

      } else {
        localStorage.setItem('user-bd', null);
        JSON.parse(localStorage.getItem('user-bd'));
      }
    });
  }


  RegistrarUsuario(email: string, contraseña: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, contraseña).then(
        (result) => {
          // here you can use either the returned user object or firebase.auth().currentUser. I will use the returned user object
          if (result) {
            this.afs.doc(`users/${result.user.uid}`).set({
              nombre: result.user.displayName,
              id: result.user.uid,
              email: result.user.email
            });
          }
        })
        .catch(error => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
    });
  }





  LoginUsuario(email: string, contraseña: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
    });
  }


  LogoutUsuario() {
    return this.afAuth.auth.signOut().then(() => {
      // localStorage.removeItem('user');
      localStorage.removeItem('user-bd');
      this.router.navigate(['login']);
    });
  }


  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }


  guardarEnStorage(user) {
    // guardando en localstorge de la coleccion user
  this.miServ.TraerUno('users', user.uid)
    .then(result => {
      console.log(result);
      localStorage.setItem('user-bd', JSON.stringify(result));
      JSON.parse(localStorage.getItem('user-bd'));
      this.router.navigate(['bienvenido']);
    });
}



}
