import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { JuegoServiceService } from '../../services/juego-service.service';
import { WebSocketserviceTsService } from '../../services/web-socketservice.ts.service';
import firebase from 'firebase/compat'; 
import { Carta } from 'src/app/modules/shared/commands/TableroModel';
import swal from'sweetalert2';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})

export class TableroComponent implements OnInit  {

  // variables
  juegoId: string = "";
  uid: string = "";
  tiempo: number = 0;
  jugadoresRonda: number = 0;
  jugadoresTablero: number = 0;
  numeroRonda: number = 0;
  roundStarted:boolean = false;
  cartasDelJugador: Carta[] = [];
  cartasDelTablero: Carta[] = [];
  
  ganadorRonda: string = "";
  cartasJugadorTablero: string[] = []
  ganadorAlias:string = "";
  ganador:boolean = false;

  // constructor
  constructor(
    public juegoService$: JuegoServiceService,
    public authService: AuthService,
    public ws: WebSocketserviceTsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  
  ngOnInit():void{
      this.route.params.subscribe((params) => {
      this.juegoId = params['id'];
      this.uid = this.authService.obtenerUsuarioSesion().uid;
      this.getMazo();
      this.getTablero()
    })
    
    this.ws.conection(this.juegoId).subscribe({
        next: (event:any) => {

          if (event.type === 'cardgame.tiempocambiadodeltablero') {
            this.tiempo = event.tiempo;
          }

          if(event.type === 'cardgame.rondainiciada'){
            this.roundStarted = true;
            this.tiempo = event.tiempo;
            this.numeroRonda=event.ronda.numero; 
            this.cartasDelJugador=this.cartasDelJugador;
          }  
          
          if(event.type === 'cardgame.ponercartaentablero'){
            this.cartasDelTablero.push({
              cartaId: event.carta.cartaId,
              poder: event.carta.poder,
              estaOculta: event.carta.estaOculta,
              estaHabilitada: event.carta,
              url:event.carta.url
            });
          } 

          if (event.type === 'cardgame.cartaquitadadelmazo'){
            this.cartasDelJugador = this.cartasDelJugador
            .filter((item) =>item.cartaId !== event.carta.cartaId.uuid)
          } 

          if (event.type === 'cardgame.rondacreada') {
            this.tiempo = event.tiempo;
            this.jugadoresRonda = event.ronda.jugadores.length
            this.numeroRonda=event.ronda.numero;
          }

          if(event.type === 'cardgame.juegofinalizado') {
            this.ganadorAlias = "Ganador:" + event.alias;
            this.ganador = true;
            this.ganadorRonda=event.alias;

            swal.fire('Ganador del juego', event.alias);
              this.router.navigate(['listaJugadores']);

              setTimeout(() => { 
                this.router.navigate(['/home']);
              },600);
          }
          
          if(event.type === 'cardgame.rondaterminada'){
            this.cartasDelTablero = [];
          }

          if(event.type === 'cardgame.cartasasignadasajugador'){
            if(event.ganadorId.uuid === this.uid){
              event.cartasApuesta.forEach((carta: any) => {
                this.cartasDelJugador.push({
                  cartaId: carta.cartaId.uuid,
                  poder: carta.poder,
                  estaOculta: carta.estaOculta,
                  estaHabilitada: carta.estaHabilitada,
                  url: carta.url
                });
              });
              alert("Ganaste la ronda!")
            }else{
              alert("Perdiste la ronda :(")
          }
        }

      }

    })

  }

      ngOnDestroy(): void {
        this.ws.closeConexion();
      }

      
      getTablero(){
        this.juegoService$.getTablero(this.juegoId).subscribe((event)=>{
          this.tiempo = event.tiempo;
          this.jugadoresRonda = event.tablero.jugadores.length;
          this.jugadoresTablero = event.tablero.jugadores.length;
          this.numeroRonda = event.ronda.numero;   
        })
      }

      getMazo() {
        this.juegoService$.getMiMazo(this.uid, this.juegoId).subscribe((element: any) => {
          this.cartasDelJugador = element.cartas
          console.log(this.cartasDelJugador)
        })
      };
          

      limpiarTablero(){
        this.cartasDelTablero.length-=this.cartasDelTablero.length
      }
        
      iniciarRonda(){
        this.ws.conection(this.juegoId).subscribe(data => console.log(data));
        this.juegoService$.iniciarRonda({
          juegoId: this.juegoId,

        }).subscribe();
        
      } 

      ponerCarta(cardId:string){
        this.juegoService$.ponerCartaEnTablero({
          juegoId:this.juegoId,
          cartaId:cardId,
          jugadorId: this.uid
        }).subscribe(e=>console.log(e))
      }
    }
