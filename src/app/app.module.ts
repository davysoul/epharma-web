import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppModuleComponentModule} from "../app-module-component/app-module-component.module";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModuleComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
