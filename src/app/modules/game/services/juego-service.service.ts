import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JuegoModel } from '../models/juego.model'; 
import { Observable } from 'rxjs';
import { TableroModel } from '../../shared/commands/TableroModel';
import { IniciarJuegoCommand } from '../../shared/commands/IniciarJuegoCommands';
import { CrearRondaCommand } from '../../shared/commands/CrearRondaCommands';

@Injectable({
  providedIn: 'root'
})
export class JuegoServiceService {

  constructor(private http: HttpClient) { }

  
  iniciar(command: IniciarJuegoCommand){
    return this.http.post( 'http://localhost:8080/juego/iniciar', command);
  }
  
  crearJuego(body:any){
    return this.http.post('http://localhost:8080/juego/crear/', {...body})
  }

  listarJuegos(idJugadorPrincipal: string | null):Observable<JuegoModel[]>{
    return this.http.get<JuegoModel[]>(`http://localhost:8080/juego/listar/${idJugadorPrincipal}`);
  }
  
  getMiMazo(uid: string, juegoId: string) {
    return this.http.get('http://localhost:8080/juego/mazo/'+uid+'/'+juegoId);
  }

  getTablero(juegoId: string): Observable<TableroModel> { 
    return this.http.get<TableroModel>('http://localhost:8080/juego/'+juegoId);
  }

  iniciarRonda(body: any){
    return this.http.post('http://localhost:8080/juego/ronda/iniciar/', {...body})
  }

  crearRonda(command: CrearRondaCommand){
    return this.http.post( 'http://localhost:8080/juego/crear/ronda', command);
  }
}
