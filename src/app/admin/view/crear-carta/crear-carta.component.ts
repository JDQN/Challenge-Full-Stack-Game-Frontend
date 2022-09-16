import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/modules/shared/commands/TableroModel';
import { Cartas } from '../../model/cartas.model';
import { AdmincartasService } from '../../service/admincartas.service';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.scss']
})
export class CrearCartaComponent implements OnInit {

  cartas: Cartas[] = [];
  carta!: Carta;
  form: FormGroup;

  constructor(
    private router: Router,
    private adminCartasService$: AdmincartasService
  ) { 
    this.form= new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      poder: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required])
    })
  }


  ngOnInit(): void {

  }

  crearCarta(){
    this.adminCartasService$.crearCarta(this.carta).subscribe(
      (result: any) => {
        let carta = result as Cartas;
        this.cartas.push(carta);
      }
    );
  }

  guardar(): void{
    this.crearCarta()
    console.log(this.form.value);
  }


  volver(){
    this.router.navigate(['admin']);
  }

}
