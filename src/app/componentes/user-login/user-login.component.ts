import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public email: string;
  public clave: string;
  public captcha = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Loguearse() {
    this.authService.LoginUsuario(this.email, this.clave).then((res) => {
      const entro = false;

      this.router.navigate(['bienvenido']);
     }).catch(error => {
          alert('Error');
      });
  }

}
