import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/shared/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  items!: MenuItem[];
  title = 'app-cartas';
  themeSelection: boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document) { 
      let theme = window.localStorage.getItem('theme');
      if (theme) {
          this.themeSelection = theme == 'dark' ? true : false;
          this.changeTheme(this.themeSelection);
      }
    }

    changeTheme(state: boolean) {
      let theme = state ? 'dark' : 'light';
      window.localStorage.setItem('theme', theme);
      let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
      themeLink.href = 'lara-' + theme + '-teal' + '.css';
    }


    isLogged: boolean = true;
    user: any = JSON.parse(localStorage.getItem('user')!);
    puntaje: number = +JSON.parse(localStorage.getItem('puntaje')!);


    ngOnInit(): void {

      this.items = [
        {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
        },
        {
          label: 'Lista de Jugadores',
          icon: 'pi pi-fw pi-users',
          routerLink: ['/listaJugadores']
        },
        {
          label: 'Nuevo Juego',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/game/new']
        },
      ]
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
