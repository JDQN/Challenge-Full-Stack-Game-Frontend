import { Component, OnInit } from '@angular/core';
import { Cartas } from '../../model/cartas.model';
import { AdmincartasService } from '../../service/admincartas.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  cartas: Cartas[] = [];

  constructor(
    private adminCartasService$: AdmincartasService
  ) { }

  ngOnInit(): void {

  }


}
