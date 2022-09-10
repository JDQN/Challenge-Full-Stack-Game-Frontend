import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



/* Imports de la libreria PrimeNG */
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
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
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
export class AuthLoginModule { }
