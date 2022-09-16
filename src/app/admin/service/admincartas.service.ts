import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from 'src/app/modules/shared/commands/TableroModel';
import { Cartas } from '../model/cartas.model';

@Injectable({
  providedIn: 'root'
})
export class AdmincartasService {

  private URL: string = 'http://localhost:8080';
  
  constructor(private http: HttpClient) {}

  getGames(): Observable<Cartas[]> {
    return this.http.get<Cartas[]>(`${this.URL}/cartas`);
  }

  
  crearCarta(carta: Carta): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.URL +"/carta/creada", JSON.stringify(carta), {headers: headers});
  }

}
