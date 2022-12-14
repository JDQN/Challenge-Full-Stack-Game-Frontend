import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { JuegoModel } from 'src/app/modules/game/models/juego.model';
import { JuegoServiceService } from 'src/app/modules/game/services/juego-service.service';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import firebase from 'firebase/compat'



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {


  items!: MenuItem[];
  title = 'app-cartas';
  themeSelection: boolean = false;
  dataSource: JuegoModel[] = [];
  currentUser!: firebase.User | null

  constructor(
    private router: Router, 
    private authService: AuthService,
    private juegoservice: JuegoServiceService,
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
    /* this.juegoservice.listarJuegos(this.currentUser!.uid).subscribe(juego => this.dataSource = juego) */


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
        {
          label: 'Historico del Juego',
          icon: 'pi pi-fw pi-book',
          routerLink: ['/historico']
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
