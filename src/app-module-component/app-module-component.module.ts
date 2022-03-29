import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InscriptionComponent} from "../app/inscription/inscription.component";
import {LogInComponent} from "../app/log-in/log-in.component";



@NgModule({
  declarations: [
    InscriptionComponent,
    LogInComponent
  ],
  exports: [
    InscriptionComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class AppModuleComponentModule { }
