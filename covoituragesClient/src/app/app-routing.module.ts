import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovoituragesComponent } from './covoiturages/covoiturages.component';
import { InternautesComponent } from './internautes/internautes.component';
import { TransportsComponent } from './transports/transports.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AddcovoituragesComponent } from './addcovoiturages/addcovoiturages.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"connexion", component:ConnexionComponent},
  {path:"menu", component:MenuComponent},
  {path: "covoiturages", component: CovoituragesComponent},
  {path:"covoiturages/:villedepart", component: CovoituragesComponent},
  {path: "addcovoiturage", component: AddcovoituragesComponent },
  {path:"users", component:InternautesComponent},
  {path:"transports", component:TransportsComponent},  
  {path:"covoiturages/addTransport", component: CovoituragesComponent},
  {path: '', redirectTo: 'covoiturages',pathMatch: 'full'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
