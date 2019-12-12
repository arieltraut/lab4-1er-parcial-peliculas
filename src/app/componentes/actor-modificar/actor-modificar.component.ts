import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-actor-modificar',
  templateUrl: './actor-modificar.component.html',
  styleUrls: ['./actor-modificar.component.css']
})
export class ActorModificarComponent implements OnInit {

  // @Input() actorAModificar: Actor;
  // @Output() seModifico: EventEmitter<boolean> = new EventEmitter<boolean>();

  // public verForm = false;

  public actor: Actor = new Actor();
  public nombreError: boolean;
  public apellidoError: boolean;
  public nacionalidadError: boolean;
  public fechaDeNacimientoError: boolean;
  public fotoEstrellaError: boolean;

  selectedFile: File = null;
  imgURL: any;

  constructor(private actorService: ActorService,
              private storage: AngularFireStorage,
              private traerParametros: ActivatedRoute) {

    this.traerParametros.queryParams.subscribe(params => {
      this.actor.id = params.id;
      this.actor.nombre = params.nombre;
      this.actor.apellido = params.apellido;
      this.actor.nacionalidad = params.nacionalidad;
      this.actor.fechaDeNacimiento = params.fechaDeNacimiento;
      this.actor.fotoEstrella = params.fotoEstrella;
    });
  }

  ngOnInit() {
    // this.ReestablecerTodo();
    console.log(this.actor);
  }


  ReestablecerTodo() {
    // this.actor = this.actorAModificar;
    this.actor = new Actor();
    this.nombreError = false;
    this.apellidoError = false;
    this.nacionalidadError = false;
    this.fechaDeNacimientoError = false;
    this.fotoEstrellaError = false;
  }


  ModificarActor() {
    if (this.ValidarCampos() !== false) {
      this.actorService.ModificarUno(JSON.parse( JSON.stringify(this.actor)))
      .then();
      alert('Se modifico el actor correctamente!');
      // this.verForm = false;
      // this.seModifico.emit(true);
      this.ReestablecerTodo();
    }
  }


  ValidarCampos() {
    let result = true;

    if (this.actor.nombre === '' || this.actor.nombre === undefined) {
      this.nombreError = true;
      result = false;
    }
    if (this.actor.apellido === '' || this.actor.apellido === undefined) {
      this.apellidoError = true;
      result = false;
    }
    if (this.actor.nacionalidad === '' || this.actor.nacionalidad === undefined) {
      this.nacionalidadError = true;
      result = false;
    }
    if (this.actor.fechaDeNacimiento == null || this.actor.fechaDeNacimiento === undefined) {
      this.fechaDeNacimientoError = true;
      result = false;
    }
    // if (this.actor.fotoEstrella == null || this.actor.fotoEstrella === undefined) {
    //   this.fotoEstrellaError = true;
    //   result = false;
    // }

    return result;
  }


  Preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Solo se pueden seleccionar imagenes.');
      (document.getElementById('foto') as HTMLInputElement).value = null;
      this.selectedFile = null;
      this.imgURL = null;
      return;
    }

    this.selectedFile = files[0]; // guarda archivo para subirlo en startUpload()

    const reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }



  StartUpload() { // (event: FileList)

    // The File object
    const file = this.selectedFile; // event.item(0);

    // Client-side validation example
    if (file == null) {
      console.error('unsupported file type :( ');
      this.ModificarActor(); // si no quiero modificar imagen pero si otros atributos
      return;
    }

    // The storage ref
    const storageRef = this.storage.ref('images/' + file.name);

    // Upload the file
    const uploadTask = storageRef.put(file);

    uploadTask.task.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');

    }, (error) => {
      // Handle unsuccessful uploads

    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
       uploadTask.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.actor.fotoEstrella = downloadURL;
        // this.db.collection('photos').add( { downloadURL });
        this.ModificarActor();
      });
    });
  }


}
