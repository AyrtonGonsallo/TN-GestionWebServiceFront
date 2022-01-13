import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CarteDeCredit } from 'src/app/model/CarteDeCredit.model';
import { Client } from 'src/app/model/Client.model';
import { Compte } from 'src/app/model/Compte.model';
import { Sexe } from 'src/app/model/enums/Sexe.model';
import { TypeClient } from 'src/app/model/enums/TypeClient.model';
import { Wallet } from 'src/app/model/Wallet.model';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css']
})
export class CreateClientsComponent implements OnInit {
  
  client:Client=new Client();
  
  

  numberRegEx = /\-?\d*\.?\d{1,2}/;
  clientForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    profession: new FormControl(''),
    pays_d_adresse: new FormControl(''),
    adresse_legale: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')]),
    ville : new FormControl(''),
    numero : new FormControl(''),
    date_de_naissance :new FormControl(new Date('Jun 15, 2015, 21:43:11 UTC').toISOString().slice(0, -1)),
    pays : new FormControl(''),
    date_d_expiration:new FormControl(new Date('Jun 15, 2015, 21:43:11 UTC').toISOString().slice(0, -1)),
    montant : new FormControl("", {
      validators: [Validators.required, Validators.pattern(this.numberRegEx)],
      updateOn: "blur"
    }),
    date_ouverture :new FormControl(new Date('Jun 15, 2015, 21:43:11 UTC').toISOString().slice(0, -1)),
   
  });
  constructor(private clientService:ClientServiceService) {
    
    this.client.comptes=[new Compte()];
    this.client.wallet=new Wallet();
    this.client.wallet.cartes=[new CarteDeCredit()]
   }

  ngOnInit(): void {
  }
  ajouter(){
    this.clientService.addClient(this.client).subscribe((d)=>{console.log(d);
    })
    console.log(this.client);
    
  }
}
