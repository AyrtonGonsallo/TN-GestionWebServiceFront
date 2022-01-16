import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAgentsComponent } from './agents/create-agents/create-agents.component';
import { GetAgentsComponent } from './agents/get-agents/get-agents.component';
import { CreateBeneficiaireComponent } from './beneficiaires/create-beneficiaire/create-beneficiaire.component';
import { GetBeneficiaireComponent } from './beneficiaires/get-beneficiaire/get-beneficiaire.component';
import { CreateCarteComponent } from './cartes/create-carte/create-carte.component';
import { GetCartesComponent } from './cartes/get-cartes/get-cartes.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { CreateClientsComponent } from './clients/create-clients/create-clients.component';
import { GetClientsInfosComponent } from './clients/get-clients-infos/get-clients-infos.component';
import { CreateCompteComponent } from './comptes/create-compte/create-compte.component';
import { GetComptesComponent } from './comptes/get-comptes/get-comptes.component';
import { CreateEmetteurComponent } from './emetteurs/create-emetteur/create-emetteur.component';
import { GetEmetteursComponent } from './emetteurs/get-emetteurs/get-emetteurs.component';
import { CreateGichetComponent } from './gichets/create-gichet/create-gichet.component';
import { GetGichetsComponent } from './gichets/get-gichets/get-gichets.component';
import { CreatePieceComponent } from './pieces/create-piece/create-piece.component';
import { GetPiecesIdentitesComponent } from './pieces/get-pieces-identites/get-pieces-identites.component';
import { CreatePointDVComponent } from './points/create-point-dv/create-point-dv.component';
import { GetPointsDeventeComponent } from './points/get-points-devente/get-points-devente.component';
import { AddTransfertComponent } from './transferts/add-transfert/add-transfert.component';
import { GetTransfertsComponent } from './transferts/get-transferts/get-transferts.component';
import { CreateWalletComponent } from './wallets/create-wallet/create-wallet.component';
import { GetWalletsComponent } from './wallets/get-wallets/get-wallets.component';

const routes: Routes = [
  {path:"getClients",component:GetClientsInfosComponent},
  {path:"getAgents",component:GetAgentsComponent},
  {path:"getPieceIdentites",component:GetPiecesIdentitesComponent},
  {path:"getGichetABillets",component:GetGichetsComponent},
  {path:"getPointDeVentes",component:GetPointsDeventeComponent},
  {path:"getCarteDeCredits",component:GetCartesComponent},
  {path:"getComptes",component:GetComptesComponent},
  {path:"getEmetteurs",component:GetEmetteursComponent},
  {path:"getTransferts",component:GetTransfertsComponent},
  {path:"getWallets",component:GetWalletsComponent},
  {path:"getClient/:id",component:ClientDetailsComponent},
  {path:"addClient",component:CreateClientsComponent},
  {path:"addAgent",component:CreateAgentsComponent},
  {path:"addBeneficiaire",component:CreateBeneficiaireComponent},
  {path:"addWallet",component:CreateWalletComponent},
  {path:"addCarteDeCredit",component:CreateCarteComponent},
  {path:"addPointDeVente",component:CreatePointDVComponent},
  {path:"addPieceIdentite",component:CreatePieceComponent},
  {path:"addEmetteur",component:CreateEmetteurComponent},
  {path:"addGichetABillet",component:CreateGichetComponent},
  {path:"addCompte",component:CreateCompteComponent},
  {path:"getBeneficiaires",component:GetBeneficiaireComponent},
  {path:"addTransfert",component:AddTransfertComponent},
  {path:"",redirectTo:"getClients",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
