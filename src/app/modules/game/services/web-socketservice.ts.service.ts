import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketserviceTsService {

  private socke!: WebSocketSubject<unknown>


  constructor() { }

  conection(idJuego: string){
    return this.socke = webSocket(`ws://localhost:9090/retrieve/${idJuego}`)

  }

  closeConexion(){
    this.socke.unsubscribe();
  }
}
