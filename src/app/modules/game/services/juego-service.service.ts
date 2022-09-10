import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JuegoModel22 } from '../models/juego.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoServiceService {

  constructor(private http: HttpClient) { }

  public crearJuego(body:any){
    return this.http.post('http://localhost:8080/juego/crear/', {...body})
  }

  listarJuegos(idJugadorPrincipal: string | null):Observable<JuegoModel22[]>{
    return this.http.get<JuegoModel22[]>(`http://localhost:8080/juego/listar/${idJugadorPrincipal}`);
  }
  
}
