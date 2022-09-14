import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { JuegoServiceService } from '../../services/juego-service.service';
import { WebSocketserviceTsService } from '../../services/web-socketservice.ts.service';
import firebase from 'firebase/compat'; 
import { Carta } from 'src/app/modules/shared/commands/TableroModel';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})

export class TableroComponent implements OnInit {

  cartasDelJugador: Carta[] = [];
  cartasDelTablero: Carta[] = [];
  tiempo: number = 0;
  jugadoresRonda: number = 0;
  jugadoresTablero: number = 0;
  numeroRonda: number = 0;
  juegoId: string = "";
  uid: string = "";
  roundStarted: boolean = false;
  currentUser!: firebase.User | null;
  btnIniciarHabilitado: boolean = false;  

  constructor(
      public juegoService$: JuegoServiceService,
      public authService$: AuthService,
      public ws: WebSocketserviceTsService,
      private route: ActivatedRoute,
      private router: Router 
    ) { }

    ngOnInit(){
      this.route.params.subscribe((params) => {
        this.juegoId = params['id'];


        this.uid = this.authService$.obtenerUsuarioSesion().uid;
        this.juegoService$.getMiMazo(this.uid, this.juegoId).subscribe((element:any) => {
          this.cartasDelJugador = element.cartas;
          console.log(this.cartasDelJugador)
        });
        

        this.ws.conection(this.juegoId).subscribe({
          next: (event:any) => {

            if (event.type === 'cardgame.tiempocambiadodeltablero') {
              this.tiempo = event.tiempo;
            }

            if(event.type === 'cardgame.rondainiciada'){
              this.roundStarted = false;
            }

            if (event.type === 'cardgame.ponercartaentablero') {
              this.cartasDelTablero.push({
                cartaId: event.carta.cartaId,
                poder: event.carta.poder,
                estaOculta: event.carta.estaOculta,
                estaHabilitada: event.carta,
                url: event.carta.url
              });
            } 
            if (event.type === 'cardgame.cartaquitadadelmazo') {
              this.cartasDelJugador = this.cartasDelJugador
                .filter((item) => item.cartaId !==  event.carta.cartaId.uuid);
            }
          }
          
        })
      })

      this.juegoService$.getTablero(this.juegoId).subscribe(event=>{
        this.tiempo = event.tiempo;
        this.jugadoresRonda = event.tablero.jugadores.length;
        this.numeroRonda = event.ronda.numero;
      });
      
    }
    
      iniciarRonda(){
        this.ws.conection(this.juegoId).subscribe(data => console.log(data));
        this.juegoService$.iniciarRonda({
          juegoId: this.juegoId,
    
        }).subscribe( x => console.log(x));
      }

      ponerCarta(cartaId: string){
        this.juegoService$.ponerCartaEnTablero({
          juegoId:this.juegoId,
          cartaId:cartaId,
          jugadorId: this.uid
        }).subscribe(e =>console.log(e))
      }



}
