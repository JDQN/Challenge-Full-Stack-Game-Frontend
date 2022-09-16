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

import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ActualizarComponent } from './view/actualizar/actualizar.component';

import { ChipsModule } from 'primeng/chips';
import {FormsModule} from '@angular/forms';
import { CrearCartaComponent } from './view/crear-carta/crear-carta.component';




@NgModule({
  declarations: [
    TablerocartasComponent,
    LoginadminComponent,
    ActualizarComponent,
    CrearCartaComponent
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
    TableModule,
    MessagesModule,
    ConfirmDialogModule,
    ChipsModule,
    FormsModule
  ]
})

export class AdmincartasModule { }
