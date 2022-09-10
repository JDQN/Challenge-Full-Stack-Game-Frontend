import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/shared/services/auth.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }
  isLogged: boolean = true;//this.authService.isLoggedIn;
  //isLogged: boolean = this.authService.isLoggedIn;
  user: any = JSON.parse(localStorage.getItem('user')!);
  puntaje: number = +JSON.parse(localStorage.getItem('puntaje')!);

  ngOnInit(): void {
  }
  inicio(){
    this.router.navigate(['home'])
  }
  listaJugadores(){
    this.router.navigate(['listaJugadores'])
  }
  nuevoJuego(){
    this.router.navigate(['game/new'])
  }
  logout(){
    this.authService.logout()
    .then(() => {
      //this.isLogged = this.authService.isLoggedIn
      this.router.navigate(['']);

    })
    .catch((error) => {
      window.alert(error)
    })
  }
}