// es como si fuera el controlador
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  //El archivo html que vamos a usar
  styleUrls: ['./app.component.scss']  // los archivos Css que vamos a usar, pueden ser varios (de uso exclusivo de este componente)
})
export class AppComponent {
  title = 'app-cartas';
}
