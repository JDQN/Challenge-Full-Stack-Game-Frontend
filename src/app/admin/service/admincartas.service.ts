import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
