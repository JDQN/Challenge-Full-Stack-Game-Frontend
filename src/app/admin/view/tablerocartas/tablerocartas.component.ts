import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartas } from '../../model/cartas.model';
import { AdmincartasService } from '../../service/admincartas.service';
import {ChipsModule} from 'primeng/chips';





@Component({
  selector: 'app-tablerocartas',
  templateUrl: './tablerocartas.component.html',
  styleUrls: ['./tablerocartas.component.scss']
})


export class TablerocartasComponent implements OnInit {

  cartas: Cartas[] = [];


  constructor(
    private router: Router,
    private adminCartasService$: AdmincartasService,
  ) {}


  ngOnInit(): void {
    this.getAllCards()
    console.log()
  }


  getAllCards(){
    this.adminCartasService$.getGames().subscribe({
      next: (resp) => {
        console.log("cards: ", resp)
        this.cartas = resp;
      }
    })};


    Actualizar(){
      this.router.navigate(['crearcarta']);
    };

}
