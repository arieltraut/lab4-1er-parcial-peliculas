import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, } from '@angular/fire/firestore';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MiservicioPrincipalService<T> {

  private urlBase = 'http://localhost/lab4/';

  constructor( private afs: AngularFirestore ) {}


  TraerTodos(collection): Observable<any[]> {
    return this.afs.collection<any>(collection).valueChanges()
    .pipe (res => res );
  }


  TraerTodos2(collection) {  // no trae a tiempo, reemplazada por traertodos
    return new Promise<any>((resolve, reject) => {
      this.afs.collection(collection).valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  TraerUno(collection, id) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection(`${collection}`).doc(id).valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  AgregarUno(objeto: any, collection: string) {
    const id = this.afs.createId();
    objeto.id = id;
    return this.afs.collection(collection).doc(id).set(objeto);

    // this.afs.collection(collection).add(objeto);
    // .doc().set(objeto);
  }

  ModificarUno(objeto: any, collection: string) {
    const id = objeto.id;
    const objetoDoc = this.afs.doc<any>(`${collection}/${id}`);
    return objetoDoc.update(objeto);
  }

  BorrarUno(id: any, collection: string) {
    const objetoDoc = this.afs.collection(`${collection}`).doc(id);
    return objetoDoc.delete();
  }


}
