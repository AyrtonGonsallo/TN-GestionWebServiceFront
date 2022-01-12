import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientsComponent } from './clients/create-clients/create-clients.component';
import { GetClientsInfosComponent } from './clients/get-clients-infos/get-clients-infos.component';
import { GetTransfertInfosComponent } from './transferts/get-transfert-infos/get-transfert-infos.component';
import { AddTransfertComponent } from './transferts/add-transfert/add-transfert.component';
import { UpdateClientsInfosComponent } from './clients/update-clients-infos/update-clients-infos.component';
import { UpdateTransfertComponent } from './transferts/update-transfert/update-transfert.component';
import { CreateEmetteurComponent } from './emetteurs/create-emetteur/create-emetteur.component';
import { CreateBeneficiaireComponent } from './beneficiaires/create-beneficiaire/create-beneficiaire.component';
import { GetBeneficiaireComponent } from './beneficiaires/get-beneficiaire/get-beneficiaire.component';
import { GetEmetteurComponent } from './emetteurs/get-emetteur/get-emetteur.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientsComponent,
    GetClientsInfosComponent,
    GetTransfertInfosComponent,
    AddTransfertComponent,
    UpdateClientsInfosComponent,
    UpdateTransfertComponent,
    CreateEmetteurComponent,
    CreateBeneficiaireComponent,
    GetBeneficiaireComponent,
    GetEmetteurComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
