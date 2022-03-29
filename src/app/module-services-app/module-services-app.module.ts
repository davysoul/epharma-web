import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientsService} from "../services/clients.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

  ],
  providers:[
    ClientsService
  ]
})
export class ModuleServicesAppModule { }
