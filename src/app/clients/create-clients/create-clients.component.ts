import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

import { CarteDeCredit } from 'src/app/model/CarteDeCredit.model';
import { Client } from 'src/app/model/Client.model';
import { Compte } from 'src/app/model/Compte.model';
import { Wallet } from 'src/app/model/Wallet.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { PieceIdentite } from 'src/app/model/PieceIdentite.model';
@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css']
})
export class CreateClientsComponent implements OnInit {
  
  client:Client=new Client();
  clientForm!: FormGroup;
  idcomptes:Array<number>=[];
  nbrComptes:number=0;
  idCartes:Array<number>=[];
  nbrCartes:number=0;
  
  constructor(private clientService:ClientServiceService,private formBuilder:FormBuilder,private thoast:ToastrService) {
    
   
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.clientForm=this.formBuilder.group({
      nom:['',[Validators.required,Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")]],
      prenom:['',[Validators.required,Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")]],
      telephone:['',[Validators.required]],
      sexe:['',Validators.required],
      profession:['',Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")],
      pays_d_adresse:['',Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")],
      adresse_legale:['',[Validators.required,Validators.pattern("^([a-zA-Z0-9]+\\s*[a-zA-Z0-9]*)*$")]],
      email:['',[Validators.required,Validators.email]],
      ville:['',Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")],
      typeClient:['',Validators.required],
      typePiece:'',
      numero:['',[Validators.maxLength(8),Validators.minLength(6),Validators.pattern("^[A-Z]{2,}[0-9]+$")]],
      date_de_naissance:'',
      pays:'',
      date_d_expiration:'',
      comptes:this.formBuilder.array([]),
      cartes:this.formBuilder.array([]),

    })
  }

  ajouter(){
      const clientValue=this.clientForm?.value;
      this.client.nom=clientValue['nom'];
      this.client.prenom=clientValue['prenom'];
      this.client.telephone=clientValue['telephone'];
      this.client.sexe=clientValue['sexe'];
      this.client.profession=clientValue['profession'];
      this.client.pays_d_adresse=clientValue['pays_d_adresse'];
      this.client.adresselegale=clientValue['adresse_legale'];
      this.client.email=clientValue['email'];
      this.client.ville=clientValue['ville'];
      this.client.type=clientValue['typeClient'];
      if( clientValue['numero'].length>1){
        console.log("piece saisie")
        var p=new PieceIdentite();
        this.client.piece_identite=p;
        this.client.piece_identite.numero=clientValue['numero'];
        this.client.piece_identite.date_d_expiration=clientValue['date_d_expiration'];
        this.client.piece_identite.date_de_naissance=clientValue['date_de_naissance'];
        this.client.piece_identite.pays=clientValue['pays'];
        this.client.piece_identite.type_piece_identite=clientValue['typePiece'];
      }
      if(this.nbrComptes>0){
        console.log("compte saisi")
        this.client.comptes=[];
        const compteValue=this.clientForm.controls.comptes?.value;
        for(let compte of compteValue){
          var nvCompte =new Compte();
          nvCompte.montant=compte['montant'];
          nvCompte.date_ouverture=compte['date_ouverture'];
          nvCompte.type=compte['typeCompte'];
          this.client.comptes.push(nvCompte);
        }
      }
      if(this.nbrCartes>0){
        console.log("wallet saisi")
        var w=new Wallet();
        this.client.wallet=w;
        this.client.wallet.cartes=[];
        const carteValue=this.clientForm.controls.cartes?.value;
        for(let carte of carteValue){
          var nvCarte =new CarteDeCredit();
          nvCarte.montant=carte['montant_carte'];
          nvCarte.date_expiration=carte['date_d_expiration_carte'];
          this.client.wallet.cartes.push(nvCarte);
        }
      }
      console.log(this.client);
      
      this.clientService.addClient(this.client).subscribe((d)=>{
        console.log("rerponse"+d);
      })
      this.thoast.success("Client Ajouté","Succes")
  }
  getComptes(){
    return this.clientForm.get('comptes') as FormArray
  }
  getCartes(){
    return this.clientForm.get('cartes') as FormArray
  }
  AjouterCarte(){
    this.nbrCartes++;
    this.idCartes.push(this.nbrCartes);
    const cartes=this.clientForm.controls.cartes as FormArray;
    cartes.push(this.formBuilder.group({
      montant_carte:'',
      date_d_expiration_carte:'',

    }));
  
  }
  AjouterCompte(){
    this.nbrComptes++;
    this.idcomptes.push(this.nbrComptes);
    const comptes=this.clientForm.controls.comptes as FormArray;
    comptes.push(this.formBuilder.group({
      montant:'',
      date_ouverture:'',
      typeCompte:'',

    }));
  }
}
