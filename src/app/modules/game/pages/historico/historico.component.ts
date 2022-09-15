import { JuegoServiceService } from 'src/app/modules/game/services/juego-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  data: any;

  constructor(
    public juegoService$: JuegoServiceService,
    public authService: AuthService,
    ) 
    { }

  ngOnInit(): void {
    let uid: string =  "" + this.authService.obtenerUsuarioSesion().uid;
    this.juegoService$.getHistorico(uid).subscribe(data => {
      this.data=data
      console.log(data);
    })
    
  }

}
