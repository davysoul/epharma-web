import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InscriptionComponent} from "../app/components/inscription/inscription.component";
import {LogInComponent} from "../app/components/log-in/log-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "../app/components/order/order.component";



@NgModule({
  declarations: [
    InscriptionComponent,
    LogInComponent,
    OrderComponent
  ],
  exports: [
    InscriptionComponent,
    LogInComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class AppModuleComponentModule { }
