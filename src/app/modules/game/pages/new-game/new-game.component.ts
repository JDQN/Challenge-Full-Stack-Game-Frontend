//controlador
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { jugadoresModel } from '../../models/jugadores.model';
import { Usuario } from '../../models/usuario.model';
import { JugadoresService } from '../../services/jugadores.service';
import firebase from 'firebase/compat'
import { Game } from '../../models/game.model';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { JuegoServiceService } from '../../services/juego-service.service';
import { WebSocketserviceTsService } from '../../services/web-socketservice.ts.service';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit, OnDestroy {

  frmJugadores: FormGroup;
  jugadores!: Array<Usuario>;

  currentUser!: firebase.User | null
  uuid: string;
  constructor(private jugadores$: JugadoresService, private auth$: AuthService, private router: Router, private juego$: JuegoServiceService, private websocket$: WebSocketserviceTsService) {
    this.frmJugadores = this.createFormJugadores();
    this.uuid = uuidv4();
  }
  ngOnDestroy(): void {
    this.websocket$.closeConexion;
  }


  async ngOnInit(): Promise<void> {
    this.jugadores = await this.jugadores$.getJugadores();
    this.currentUser = await this.auth$.getUserAuth();
    this.jugadores = this.jugadores.filter(item => item.id !== this.currentUser?.uid);
    this.websocket$.conection(this.uuid).subscribe({
      next: (message: any) => console.log(message),
      error: (error: any) => console.log(error),
      complete: () => console.log("completado"),
    })
  }

  public submit(): void {

    const gamers = this.frmJugadores.getRawValue();
    console.log(gamers.jugadores.push(this.currentUser?.displayName));
    gamers.jugadores.push(this.currentUser?.uid);
    console.log("Submit", gamers);
    this.jugadores$.game(gamers).subscribe({
      next: (data: Game) => {
        // aqui llega algo con la  informacion que llega del backend
        console.log("Game", data);
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => console.log("completed")
    });
  }

  private createFormJugadores(): FormGroup {
    return new FormGroup({
      jugadores: new FormControl(null, [Validators.required])
    });
  }
  btnCrearJuego() {
    this.router.navigate(['listaJugadores']);
  }


  btnLogout(): void {
    this.auth$.logout();
  }


  enviar() {
    const listJugadores = this.frmJugadores.getRawValue();
    console.log(listJugadores);
    const jugadores: any = {};
    listJugadores.jugadores.push([this.currentUser!.uid, this.currentUser!.displayName])
    listJugadores.jugadores.forEach((user: (string | number)[]) => {
      jugadores[user[0]] = user[1];
    });

    this.juego$.crearJuego({
      juegoId: this.uuid,
      jugadores,
      jugadorPrincipalId: this.currentUser?.uid
    }).subscribe(data => {
      console.log(data);
      this.router.navigate(['listaJugadores']);
    });
  }

}
