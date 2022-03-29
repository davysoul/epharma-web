import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppModuleComponentModule} from "../app-module-component/app-module-component.module";
import { MenuComponent } from './components/menu/menu.component';
import {FormsModule} from "@angular/forms";
import {ModuleServicesAppModule} from "./module-services-app/module-services-app.module";
import {ClientsService} from "./services/clients.service";
import {HttpClientModule} from "@angular/common/http";
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModuleComponentModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ModuleServicesAppModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
