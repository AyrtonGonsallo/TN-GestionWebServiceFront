import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { GetClientsInfosComponent } from './clients/get-clients-infos/get-clients-infos.component';

const routes: Routes = [
  {path:"getClients",component:GetClientsInfosComponent},
  {path:"getClient/:id",component:ClientDetailsComponent},
  {path:"",redirectTo:"getClients",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
