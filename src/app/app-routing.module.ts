import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { CreateClientsComponent } from './clients/create-clients/create-clients.component';
import { GetClientsInfosComponent } from './clients/get-clients-infos/get-clients-infos.component';

const routes: Routes = [
  {path:"getClients",component:GetClientsInfosComponent},
  {path:"getClient/:id",component:ClientDetailsComponent},
  {path:"addClient",component:CreateClientsComponent},
  {path:"",redirectTo:"getClients",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
