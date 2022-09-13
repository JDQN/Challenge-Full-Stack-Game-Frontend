import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewGameComponent } from './game/pages/new-game/new-game.component';
import { HomeComponent } from './game/pages/home/home.component';
import { JuegosComponent } from './game/pages/juegos/juegos.component';
import { TableroComponent } from './game/pages/tablero/tablero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JuegoRoutingsModule } from './juego-routing.module'; 
import { NavbarComponent } from './game/components/navbar/navbar.component';

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
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JuegoRoutingsModule,
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
  ],
  declarations: [
  NewGameComponent,
  HomeComponent,
  JuegosComponent,
  TableroComponent,
  NavbarComponent,
  
]
})
export class GameModuleModule { }