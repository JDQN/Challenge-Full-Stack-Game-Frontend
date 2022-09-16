import { CrearCartaComponent } from './view/crear-carta/crear-carta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './view/actualizar/actualizar.component';
import { TablerocartasComponent } from './view/tablerocartas/tablerocartas.component';

const routes: Routes = [

  {
    path: 'admin',
    component: TablerocartasComponent,
  },
  
  {
    path: 'actualizar',
    component: ActualizarComponent,
  },
  {
    path: 'crearcarta',
    component: CrearCartaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincartasRoutingModule { }
