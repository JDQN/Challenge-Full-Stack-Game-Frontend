import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablerocartasComponent } from './view/tablerocartas/tablerocartas.component';

const routes: Routes = [

  {
    path: 'admin',
    component: TablerocartasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincartasRoutingModule { }
