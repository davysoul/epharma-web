import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientsService} from "../services/clients.service";
import {HttpClientModule} from "@angular/common/http";
import {OrderService} from "../services/order.service";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

  ],
  providers:[
    ClientsService,
    OrderService
  ]
})
export class ModuleServicesAppModule { }
