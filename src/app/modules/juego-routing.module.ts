import { ActualizarComponent } from './../admin/view/actualizar/actualizar.component';
import { HistoricoComponent } from './game/pages/historico/historico.component';
// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './game/pages/home/home.component';
import { NewGameComponent } from './game/pages/new-game/new-game.component';
import { JuegosComponent } from './game/pages/juegos/juegos.component';
import { TableroComponent } from './game/pages/tablero/tablero.component';


// Components


import {
  AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { LoginComponent } from '../auth-login/auth/login/login.component';
import { TablerocartasComponent } from '../admin/view/tablerocartas/tablerocartas.component';
import { CrearCartaComponent } from '../admin/view/crear-carta/crear-carta.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['home']);

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'game/new',
    component: NewGameComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path:'listaJugadores',
    component: JuegosComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path:'tablero/:id',
    component: TableroComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path:'historico',
    component: HistoricoComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'admin',
    component: TablerocartasComponent,
  },
  {
    path: 'actualizar',
    component: ActualizarComponent,
  },
  {
    path: 'crearcarta',
    component: CrearCartaComponent,
  },
  
  {
    path: '**',
    redirectTo: "/login",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingsModule { }