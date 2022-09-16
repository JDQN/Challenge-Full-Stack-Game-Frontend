import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartas } from '../../model/cartas.model';
import { AdmincartasService } from '../../service/admincartas.service';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.scss']
})
export class CrearCartaComponent implements OnInit {

  cartas: Cartas[] = [];

  constructor(
    private router: Router,
    private adminCartasService$: AdmincartasService
  ) { }

  ngOnInit(): void {

  }

  crearCarta(){
    this.adminCartasService$.crearCarta();
  }

  volver(){
    this.router.navigate(['admin']);
  }

}
