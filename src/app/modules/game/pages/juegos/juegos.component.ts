import { Component, OnInit } from '@angular/core';
import { JuegoModel } from '../../models/juego.model';
import { Router } from '@angular/router';
import { JuegoServiceService } from '../../services/juego-service.service';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import firebase from 'firebase/compat'
import { WebSocketserviceTsService } from '../../services/web-socketservice.ts.service';



@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  dataSource: JuegoModel[] = [];
  currentUser!: firebase.User | null
  juegos: any = [];
  

  constructor(
    private router: Router, 
    private juegoservice: JuegoServiceService, 
    private auth$: AuthService,
    private Websocket$: WebSocketserviceTsService) { }


  ngOnInit(): void {
    /* this.currentUser = await this.auth$.getUserAuth();
    this.juegoservice.listarJuegos(this.currentUser!.uid).subscribe(juego => this.dataSource = juego)
    */

    this.juegoservice.getJuegos().subscribe({
      next:(data) => {
        this.juegos = data;
        console.log(this.juegos)
      }
    })
  }

  goBoard(id: string) {
    this.Websocket$.conection(id).subscribe({

      next: (event:any) => {
        if(event.type === 'cardgame.tablerocreado'){     
          this.juegoservice.crearRonda({
              juegoId: id,
              tiempo: 60,
              jugadores: event.jugadorIds.map((it:any) => it.uuid) 
            });
          }
          if(event.type == 'cardgame.rondacreada'){
            this.router.navigate(['tablero/'+id]);
          }
        },
        error: (err:any) => console.log(err),
        complete: () => {console.log('complete')}
      });
      this.juegoservice.iniciar({ juegoId: id }).subscribe();
  }

  entrar(id: string){
    this.router.navigate([`tablero/${id}`])
  }
}