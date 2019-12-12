import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email = this.authService.logeado.email; // 'bla@admin.com';


  constructor( public authService: AuthService) { }

  ngOnInit() {
  }

}
