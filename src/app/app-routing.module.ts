import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./components/log-in/log-in.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {OrderComponent} from "./components/order/order.component";

const routes: Routes = [
  {path:"login",component:LogInComponent},
  {path:"signup",component:InscriptionComponent},
  {path:"order",component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
