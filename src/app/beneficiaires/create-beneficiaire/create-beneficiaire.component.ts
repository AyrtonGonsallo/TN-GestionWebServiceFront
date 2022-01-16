import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

import { CarteDeCredit } from 'src/app/model/CarteDeCredit.model';
import { Beneficiaire } from 'src/app/model/Beneficiare.model';
import { Compte } from 'src/app/model/Compte.model';
import { Wallet } from 'src/app/model/Wallet.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { PieceIdentite } from 'src/app/model/PieceIdentite.model';
@Component({
  selector: 'app-create-beneficiaire',
  templateUrl: './create-beneficiaire.component.html',
  styleUrls: ['./create-beneficiaire.component.css']
})
export class CreateBeneficiaireComponent implements OnInit {
  beneficiaire:Beneficiaire=new Beneficiaire();
  beneficiaireForm!: FormGroup;
  idcomptes:Array<number>=[];
  nbrComptes:number=0;
  idCartes:Array<number>=[];
  nbrCartes:number=0;
  
  constructor(private ClientService:ClientServiceService,private formBuilder:FormBuilder,private thoast:ToastrService) {
    
   
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.beneficiaireForm=this.formBuilder.group({
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
      const beneficiaireValue=this.beneficiaireForm?.value;
      this.beneficiaire.nom=beneficiaireValue['nom'];
      this.beneficiaire.prenom=beneficiaireValue['prenom'];
      this.beneficiaire.telephone=beneficiaireValue['telephone'];
      this.beneficiaire.sexe=beneficiaireValue['sexe'];
      this.beneficiaire.profession=beneficiaireValue['profession'];
      this.beneficiaire.pays_d_adresse=beneficiaireValue['pays_d_adresse'];
      this.beneficiaire.adresselegale=beneficiaireValue['adresse_legale'];
      this.beneficiaire.email=beneficiaireValue['email'];
      this.beneficiaire.ville=beneficiaireValue['ville'];
      this.beneficiaire.type=beneficiaireValue['typeClient'];
      if( beneficiaireValue['numero'].length>1){
        console.log("piece saisie")
        var p=new PieceIdentite();
        this.beneficiaire.piece_identite=p;
        this.beneficiaire.piece_identite.numero=beneficiaireValue['numero'];
        this.beneficiaire.piece_identite.date_d_expiration=beneficiaireValue['date_d_expiration'];
        this.beneficiaire.piece_identite.date_de_naissance=beneficiaireValue['date_de_naissance'];
        this.beneficiaire.piece_identite.pays=beneficiaireValue['pays'];
        this.beneficiaire.piece_identite.type_piece_identite=beneficiaireValue['typePiece'];
      }
      if(this.nbrComptes>0){
        console.log("compte saisi")
        this.beneficiaire.comptes=[];
        const compteValue=this.beneficiaireForm.controls.comptes?.value;
        for(let compte of compteValue){
          var nvCompte =new Compte();
          nvCompte.montant=compte['montant'];
          nvCompte.date_ouverture=compte['date_ouverture'];
          nvCompte.type=compte['typeCompte'];
          this.beneficiaire.comptes.push(nvCompte);
        }
      }
      if(this.nbrCartes>0){
        console.log("wallet saisi")
        var w=new Wallet();
        this.beneficiaire.wallet=w;
        this.beneficiaire.wallet.cartes=[];
        const carteValue=this.beneficiaireForm.controls.cartes?.value;
        for(let carte of carteValue){
          var nvCarte =new CarteDeCredit();
          nvCarte.montant=carte['montant_carte'];
          nvCarte.date_expiration=carte['date_d_expiration_carte'];
          this.beneficiaire.wallet.cartes.push(nvCarte);
        }
      }
      console.log(this.beneficiaire);
      
      this.ClientService.addBeneficiaire(this.beneficiaire).subscribe((d)=>{
        console.log("reponse"+d);
      })
      this.thoast.success("beneficiaire Ajouté","Succes")
  }
  getComptes(){
    return this.beneficiaireForm.get('comptes') as FormArray
  }
  getCartes(){
    return this.beneficiaireForm.get('cartes') as FormArray
  }
  AjouterCarte(){
    this.nbrCartes++;
    this.idCartes.push(this.nbrCartes);
    const cartes=this.beneficiaireForm.controls.cartes as FormArray;
    cartes.push(this.formBuilder.group({
      montant_carte:'',
      date_d_expiration_carte:'',

    }));
  
  }
  AjouterCompte(){
    this.nbrComptes++;
    this.idcomptes.push(this.nbrComptes);
    const comptes=this.beneficiaireForm.controls.comptes as FormArray;
    comptes.push(this.formBuilder.group({
      montant:'',
      date_ouverture:'',
      typeCompte:'',

    }));
  }
}

