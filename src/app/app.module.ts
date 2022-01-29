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
import { GetPiecesIdentitesComponent } from './pieces/get-pieces-identites/get-pieces-identites.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { GetAgentsComponent } from './agents/get-agents/get-agents.component';
import { GetPointsDeventeComponent } from './points/get-points-devente/get-points-devente.component';
import { GetEmetteursComponent } from './emetteurs/get-emetteurs/get-emetteurs.component';
import { GetGichetsComponent } from './gichets/get-gichets/get-gichets.component';
import { GetWalletsComponent } from './wallets/get-wallets/get-wallets.component';
import { GetTransfertsComponent } from './transferts/get-transferts/get-transferts.component';
import { GetComptesComponent } from './comptes/get-comptes/get-comptes.component';
import { GetCartesComponent } from './cartes/get-cartes/get-cartes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { CreateAgentsComponent } from './agents/create-agents/create-agents.component';
import { CreateCarteComponent } from './cartes/create-carte/create-carte.component';
import { CreateCompteComponent } from './comptes/create-compte/create-compte.component';
import { CreateGichetComponent } from './gichets/create-gichet/create-gichet.component';
import { CreatePieceComponent } from './pieces/create-piece/create-piece.component';
import { CreatePointDVComponent } from './points/create-point-dv/create-point-dv.component';
import { CreateWalletComponent } from './wallets/create-wallet/create-wallet.component';
import { AjouterTransfertMComponent } from './transfertM/ajouter-transfert-m/ajouter-transfert-m.component';
import { GetTransfertsMComponent } from './transfertM/get-transferts-m/get-transferts-m.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPiecesIdentitesComponent,
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
    ClientDetailsComponent,
    AccueilComponent,
    GetAgentsComponent,
    GetPointsDeventeComponent,
    GetEmetteursComponent,
    GetGichetsComponent,
    GetWalletsComponent,
    GetTransfertsComponent,
    GetComptesComponent,
    GetCartesComponent,
    CreateAgentsComponent,
    CreateCarteComponent,
    CreateCompteComponent,
    CreateGichetComponent,
    CreatePieceComponent,
    CreatePointDVComponent,
    CreateWalletComponent,
    AjouterTransfertMComponent,
    GetTransfertsMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
