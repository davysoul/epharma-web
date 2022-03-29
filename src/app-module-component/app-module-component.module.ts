import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InscriptionComponent} from "../app/components/inscription/inscription.component";
import {LogInComponent} from "../app/components/log-in/log-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



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
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AppModuleComponentModule { }
