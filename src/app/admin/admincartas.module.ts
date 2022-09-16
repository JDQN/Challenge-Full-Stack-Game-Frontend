import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincartasRoutingModule } from './admincartas-routing.module';
import { LoginadminComponent } from './view/loginadmin/loginadmin.component';
import { TablerocartasComponent } from './view/tablerocartas/tablerocartas.component';
import { GameModuleModule } from '../modules/juego.module';

//Libreria PrimeNG
import { StyleClassModule } from 'primeng/styleclass';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { SplitterModule } from "primeng/splitter";
import { FieldsetModule, } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    TablerocartasComponent,
    LoginadminComponent
  ],

  imports: [
    CommonModule,
    AdmincartasRoutingModule,
    GameModuleModule,
    StyleClassModule,
    InputSwitchModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    MultiSelectModule,
    AvatarModule,
    BadgeModule,
    SplitterModule,
    FieldsetModule,
    TableModule
  ]
})

export class AdmincartasModule { }
