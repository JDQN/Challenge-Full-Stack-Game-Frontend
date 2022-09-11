import { Component, OnInit } from '@angular/core';
import { JuegoModel } from '../../models/juego.model';
import { Router } from '@angular/router';
import { JuegoServiceService } from '../../services/juego-service.service';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import firebase from 'firebase/compat'


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  dataSource: JuegoModel[] = [];
  currentUser!: firebase.User | null

  constructor(
    private router: Router, 
    private juegoservice: JuegoServiceService, 
    private auth$: AuthService) { }

  async ngOnInit() {
    this.currentUser = await this.auth$.getUserAuth();
    this.juegoservice.listarJuegos(this.currentUser!.uid).subscribe(juego => this.dataSource = juego)
  }

  goBoard() {
    this.router.navigate(['tablero']);
  }
}